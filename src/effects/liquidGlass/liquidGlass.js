const DEFAULT_CONFIG = {
  glassThickness: 80,
  bezelWidth: 40,
  ior: 1.4,
  scaleRatio: 1,
  blur: 1,
  specularOpacity: 0.6,
  specularSat: 0,
  tintColor: "255,255,255",
  tintOpacity: 0,
  innerShadow: "rgba(255,255,255,0)",
  innerShadowBlur: 0,
  innerShadowSpread: 0,
  balancedSpecular: false,
};

const targets = new WeakMap();

let defs = null;

function surfaceFn(x) {
  return Math.pow(1 - Math.pow(1 - x, 4), 0.25);
}

function calcRefractionProfile(
  glassThickness,
  bezelWidth,
  ior,
  samples = 128
) {
  const eta = 1 / ior;

  function refract(nx, ny) {
    const dot = ny;
    const k = 1 - eta * eta * (1 - dot * dot);

    if (k < 0) return null;

    const sq = Math.sqrt(k);

    return [
      -(eta * dot + sq) * nx,
      eta - (eta * dot + sq) * ny,
    ];
  }

  const profile = new Float64Array(samples);

  for (let i = 0; i < samples; i++) {
    const x = i / samples;
    const y = surfaceFn(x);

    const dx = x < 1 ? 0.0001 : -0.0001;
    const y2 = surfaceFn(x + dx);

    const deriv = (y2 - y) / dx;
    const mag = Math.sqrt(deriv * deriv + 1);

    const ref = refract(-deriv / mag, -1 / mag);

    profile[i] = ref
      ? ref[0] *
        ((y * bezelWidth + glassThickness) / ref[1])
      : 0;
  }

  return profile;
}

function generateDisplacementMap(
  width,
  height,
  radius,
  bezelWidth,
  profile,
  maxDisp
) {
  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  const image = ctx.createImageData(width, height);
  const data = image.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 128;
    data[i + 1] = 128;
    data[i + 2] = 0;
    data[i + 3] = 255;
  }

  const r = radius;
  const rSq = r * r;
  const r1Sq = (r + 1) ** 2;

  const rBSq = Math.max(r - bezelWidth, 0) ** 2;

  const widthBody = width - r * 2;
  const heightBody = height - r * 2;

  const samples = profile.length;

  for (let y1 = 0; y1 < height; y1++) {
    for (let x1 = 0; x1 < width; x1++) {
      const x =
        x1 < r
          ? x1 - r
          : x1 >= width - r
          ? x1 - r - widthBody
          : 0;

      const y =
        y1 < r
          ? y1 - r
          : y1 >= height - r
          ? y1 - r - heightBody
          : 0;

      const dSq = x * x + y * y;

      if (dSq > r1Sq || dSq < rBSq) continue;

      const dist = Math.sqrt(dSq);

      const fromSide = r - dist;

      const opacity =
        dSq < rSq
          ? 1
          : 1 -
            (dist - Math.sqrt(rSq)) /
              (Math.sqrt(r1Sq) - Math.sqrt(rSq));

      if (opacity <= 0 || dist === 0) continue;

      const cos = x / dist;
      const sin = y / dist;

      const index = Math.min(
        ((fromSide / bezelWidth) * samples) | 0,
        samples - 1
      );

      const displacement = profile[index] || 0;

      const dx = (-cos * displacement) / maxDisp;
      const dy = (-sin * displacement) / maxDisp;

      const pixel = (y1 * width + x1) * 4;

      data[pixel] =
        (128 + dx * 127 * opacity + 0.5) | 0;

      data[pixel + 1] =
        (128 + dy * 127 * opacity + 0.5) | 0;
    }
  }

  ctx.putImageData(image, 0, 0);

  return canvas.toDataURL();
}

function generateSpecularMap(
  width,
  height,
  radius,
  bezelWidth,
  balanced
) {
  const angle = Math.PI / 3;

  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  const image = ctx.createImageData(width, height);
  const data = image.data;

  data.fill(0);

  const r = radius;
  const rSq = r * r;
  const r1Sq = (r + 1) ** 2;

  const rBSq = Math.max(r - bezelWidth, 0) ** 2;

  const widthBody = width - r * 2;
  const heightBody = height - r * 2;

  const sv = [
    Math.cos(angle),
    Math.sin(angle),
  ];

  for (let y1 = 0; y1 < height; y1++) {
    for (let x1 = 0; x1 < width; x1++) {
      const x =
        x1 < r
          ? x1 - r
          : x1 >= width - r
          ? x1 - r - widthBody
          : 0;

      const y =
        y1 < r
          ? y1 - r
          : y1 >= height - r
          ? y1 - r - heightBody
          : 0;

      const dSq = x * x + y * y;

      if (dSq > r1Sq || dSq < rBSq) continue;

      const dist = Math.sqrt(dSq);

      const fromSide = r - dist;

      const opacity =
        dSq < rSq
          ? 1
          : 1 -
            (dist - Math.sqrt(rSq)) /
              (Math.sqrt(r1Sq) - Math.sqrt(rSq));

      if (opacity <= 0 || dist === 0) continue;

      const cos = x / dist;
      const sin = -y / dist;

      const dot = balanced
        ? 1
        : Math.abs(
            cos * sv[0] + sin * sv[1]
          );

      const edge = Math.sqrt(
        Math.max(
          0,
          1 - (1 - fromSide) ** 2
        )
      );

      const coefficient = dot * edge;

      const color = (255 * coefficient) | 0;

      const alpha =
        (color * coefficient * opacity) | 0;

      const pixel = (y1 * width + x1) * 4;

      data[pixel] = color;
      data[pixel + 1] = color;
      data[pixel + 2] = color;
      data[pixel + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);

  return canvas.toDataURL();
}

function svgElement(tag, attributes) {
  const element = document.createElementNS(
    "http://www.w3.org/2000/svg",
    tag
  );

  for (const [key, value] of Object.entries(
    attributes
  )) {
    element.setAttribute(key, value);
  }

  return element;
}

function ensureDefs() {
  if (defs && document.documentElement.contains(defs)) {
    return defs;
  }

  const svg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");

  svg.style.cssText =
    "position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;";

  defs = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "defs"
  );

  defs.id = "velmora-liquid-glass-defs";

  svg.appendChild(defs);

  document.documentElement.appendChild(svg);

  return defs;
}

function buildFilter(
  id,
  width,
  height,
  radius,
  config
) {
  const bezel = Math.min(
    config.bezelWidth,
    radius - 1,
    Math.min(width, height) / 2 - 1
  );

  const profile = calcRefractionProfile(
    config.glassThickness,
    bezel,
    config.ior,
    128
  );

  const maxDisp =
    Math.max(
      ...Array.from(profile).map(Math.abs)
    ) || 1;

  const displacementUrl =
    generateDisplacementMap(
      width,
      height,
      radius,
      bezel,
      profile,
      maxDisp
    );

  const specularUrl =
    generateSpecularMap(
      width,
      height,
      radius,
      bezel * 2.5,
      Boolean(config.balancedSpecular)
    );

  const scale =
    maxDisp * config.scaleRatio;

  const pad = config.balancedSpecular
    ? 0.36
    : 0;

  const filter = svgElement("filter", {
    id,
    x: String(Math.round(-width * pad)),
    y: String(Math.round(-height * pad)),
    width: String(
      Math.round(width * (1 + pad * 2))
    ),
    height: String(
      Math.round(height * (1 + pad * 2))
    ),
    filterUnits: "userSpaceOnUse",
    primitiveUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
  });

  const blur = svgElement("feGaussianBlur", {
    in: "SourceGraphic",
    stdDeviation: config.blur,
    result: "blurred",
  });

  const displacementImage = svgElement(
    "feImage",
    {
      href: displacementUrl,
      x: 0,
      y: 0,
      width,
      height,
      result: "disp_map",
    }
  );

  const displacementMap = svgElement(
    "feDisplacementMap",
    {
      in: "blurred",
      in2: "disp_map",
      scale,
      xChannelSelector: "R",
      yChannelSelector: "G",
      result: "displaced",
    }
  );

  const saturation = svgElement(
    "feColorMatrix",
    {
      in: "displaced",
      type: "saturate",
      values: config.specularSat,
      result: "displaced_sat",
    }
  );

  const specularImage = svgElement(
    "feImage",
    {
      href: specularUrl,
      x: 0,
      y: 0,
      width,
      height,
      result: "spec_layer",
    }
  );

  const composite = svgElement(
    "feComposite",
    {
      in: "displaced_sat",
      in2: "spec_layer",
      operator: "in",
      result: "spec_masked",
    }
  );

  const transfer = svgElement(
    "feComponentTransfer",
    {
      in: "spec_layer",
      result: "spec_faded",
    }
  );

  transfer.appendChild(
    svgElement("feFuncA", {
      type: "linear",
      slope: config.specularOpacity,
    })
  );

  const blendOne = svgElement("feBlend", {
    in: "spec_masked",
    in2: "displaced",
    mode: "normal",
    result: "with_sat",
  });

  const blendTwo = svgElement("feBlend", {
    in: "spec_faded",
    in2: "with_sat",
    mode: "normal",
  });

  filter.append(
    blur,
    displacementImage,
    displacementMap,
    saturation,
    specularImage,
    composite,
    transfer,
    blendOne,
    blendTwo
  );

  return filter;
}

export function applyLiquidGlass(
  element,
  customConfig = {}
) {
  if (!element) return () => {};

  if (targets.has(element)) {
    return targets.get(element).cleanup;
  }

  const config = {
    ...DEFAULT_CONFIG,
    ...customConfig,
  };

  if (
    getComputedStyle(element).position ===
    "static"
  ) {
    element.style.position = "relative";
  }

  const refractiveLayer =
    document.createElement("div");

  refractiveLayer.className =
    "liquid-glass-refractive";

  refractiveLayer.style.cssText = `
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  `;

  const tintLayer =
    document.createElement("div");

  tintLayer.className =
    "liquid-glass-tint";

  tintLayer.style.cssText = `
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  `;

  element.insertBefore(
    tintLayer,
    element.firstChild
  );

  element.insertBefore(
    refractiveLayer,
    element.firstChild
  );

  function elevateChildren() {
    Array.from(element.children).forEach(
      (child) => {
        if (
          child === refractiveLayer ||
          child === tintLayer
        ) {
          return;
        }

        if (
          getComputedStyle(child).position ===
          "static"
        ) {
          child.style.position = "relative";
        }

        if (!child.style.zIndex) {
          child.style.zIndex = "1";
        }
      }
    );
  }

  function rebuild() {
    const svgDefs = ensureDefs();

    const width = Math.round(
      element.offsetWidth
    );

    const height = Math.round(
      element.offsetHeight
    );

    if (width < 4 || height < 4) return;

    const dataRadius = parseFloat(
      element.getAttribute("data-radius") ||
        "0"
    );

    const cssRadius = parseFloat(
      getComputedStyle(element)
        .borderTopLeftRadius || "0"
    );

    const radius = Math.max(
      2,
      Math.min(
        dataRadius ||
          cssRadius ||
          24,
        width / 2,
        height / 2
      )
    );

    const filterId =
      "velmora-glass-" +
      Math.random()
        .toString(36)
        .slice(2, 10);

    const filter = buildFilter(
      filterId,
      width,
      height,
      radius,
      config
    );

    svgDefs.appendChild(filter);

    refractiveLayer.style.borderRadius =
      `${radius}px`;

    refractiveLayer.style.backdropFilter =
      `url(#${filterId})`;

    refractiveLayer.style.webkitBackdropFilter =
      `url(#${filterId})`;

    tintLayer.style.borderRadius =
      `${radius}px`;

    tintLayer.style.backgroundColor =
      `rgba(${config.tintColor},${config.tintOpacity})`;

    tintLayer.style.boxShadow =
      `inset 0 0 ${config.innerShadowBlur}px ${config.innerShadowSpread}px ${config.innerShadow}`;

    elevateChildren();
  }

  const resizeObserver =
    new ResizeObserver(() => {
      requestAnimationFrame(rebuild);
    });

  resizeObserver.observe(element);

  rebuild();

  const cleanup = () => {
    resizeObserver.disconnect();

    refractiveLayer.remove();
    tintLayer.remove();

    targets.delete(element);
  };

  targets.set(element, {
    cleanup,
    rebuild,
  });

  return cleanup;
}