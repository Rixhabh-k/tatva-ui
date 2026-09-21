
import {
  MagneticButton,
  FlipButton,
  FillButton,
  ThreeDButton,
  SubmitButton,
  PositionAwareButton,
  UploadButton,
  TypewriterText,
  TextScramble,
  ShadowText,
  WaveText,
  MagicText,
} from "velmora";

const docs = {
  installation: {
    title: "Velmora UI",
    description:
      "A reusable animation and interaction library for building modern, expressive web interfaces with ready-to-use React components and customizable effects.",

    sections: [
      {
        title: "Installation",

        paragraphs: [
          "Install Velmora using npm.",
          "Import the Velmora stylesheet.",
          "Import the components you need.",
        ],

        codeBlocks: [
          {
            language: "bash",
            code: "npm install velmora",
          },
          {
            language: "jsx",
            code: `import "velmora/style.css";`,
          },
          {
            language: "jsx",
            code: `import {
  MagneticButton,
  FlipButton,
  FillButton,
  ThreeDButton,
  SubmitButton,
  PositionAwareButton,
  UploadButton,
  TypeWriterText,
  TextScramble,
  ShadowText,
  WaveText,
  MagicText
} from "velmora";`,
          },
        ],
      },

      {
        title: "Basic Usage",

        codeBlocks: [
          {
            language: "jsx",
            code: `import {
  MagneticButton,
  FlipButton,
  FillButton,
  ThreeDButton,
  SubmitButton,
  PositionAwareButton,
  UploadButton,
  TypeWriterText,
  TextScramble,
  ShadowText,
  WaveText,
  MagicText
} from "velmora";

import "velmora/style.css";

function App() {
  return (
    <div>
      <MagneticButton>Magnetic</MagneticButton>

      <FlipButton front="FRONT" back="BACK" />

      <FillButton>Hover Me</FillButton>

      <ThreeDButton front="FRONT" back="BACK" />

      <SubmitButton />

      <PositionAwareButton>
        Position Aware
      </PositionAwareButton>

      <UploadButton />

      <TypeWriterText
        words={["Hello", "World", "Velmora"]}
      />

      <TextScramble
        phrases={["Build", "Create", "Animate"]}
      />

      <ShadowText>
        COLORS
      </ShadowText>

      <WaveText>
        WAVES
      </WaveText>

      <MagicText
        beforeText="Sometimes I'll start a line of code and I"
        magicText="don't even know"
        afterText="where it's going."
      />
    </div>
  );
}

export default App;`,
          },
        ],
      },

      {
        title: "Custom Styling",

        paragraphs: [
          "Velmora provides the animation behavior while users remain in control of the visual design through className.",
        ],

        codeBlocks: [
          {
            language: "jsx",
            code: `<MagneticButton className="my-button">
  Magnetic
</MagneticButton>`,
          },
          {
            language: "css",
            code: `.my-button {
  width: 220px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid black;
  background: purple;
  color: white;
  font-size: 18px;
}`,
          },
        ],
      },
    ],
  },

  "magnetic-button": {
    title: "Magnetic Button",
    description:
      "A magnetic interaction where the button follows the cursor within a specified radius.",

    preview: MagneticButton,

    previewProps: {
      children: "Magnetic",
      strength: 0.35,
      radius: 150,
      ease: 0.15,
      className: "magnetic-button",
    },

    usage: {
      language: "jsx",
      code: `import MagneticButton from "velmora"

export function MagneticButtonDemo() {
  return (
    <MagneticButton
      strength={0.35}
      radius={150}
      ease={0.15}
      className="magnetic-button"
    >
      Magnetic
    </MagneticButton>
  )
}`,
    },

    props: [
      {
        name: "children",
        default: '"Hover Me"',
        description: "Button content",
      },
      {
        name: "strength",
        default: "0.35",
        description: "Magnetic strength",
      },
      {
        name: "radius",
        default: "150",
        description: "Activation radius",
      },
      {
        name: "ease",
        default: "0.15",
        description: "Movement smoothness",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "flip-button": {
    title: "Flip Button",
    description: "A 3D-style text flip effect.",

    preview: FlipButton,

    previewProps: {
      front: "FRONT",
      back: "BACK",
      duration: 500,
      frontColor: "#323237",
      backColor: "#adadaf",
      textColor: "#adadaf",
      backTextColor: "#323237",
      className: "flip-button",
    },

    usage: {
      language: "jsx",
      code: `import FlipButton from "velmora"

export function FlipButtonDemo() {
  return (
    <FlipButton
      front="FRONT"
      back="BACK"
      duration={500}
      frontColor="#323237"
      backColor="#adadaf"
      textColor="#adadaf"
      backTextColor="#323237"
    />
  )
}`,
    },

    props: [
      {
        name: "front",
        default: '"Front"',
        description: "Front text",
      },
      {
        name: "back",
        default: '"Back"',
        description: "Back text",
      },
      {
        name: "duration",
        default: "500",
        description: "Animation duration in ms",
      },
      {
        name: "frontColor",
        default: '"#323237"',
        description: "Front background",
      },
      {
        name: "backColor",
        default: '"#adadaf"',
        description: "Back background",
      },
      {
        name: "textColor",
        default: '"#adadaf"',
        description: "Front text color",
      },
      {
        name: "backTextColor",
        default: '"#323237"',
        description: "Back text color",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "fill-button": {
    title: "Fill Button",
    description: "An expanding fill effect that fills the button on hover.",

    preview: FillButton,

    previewProps: {
      children: "Hover Me",
      fillColor: "#38146a",
      textColor: "#fff",
      hoverTextColor: "#fff",
      duration: 350,
      className: "fill-button",
    },

    usage: {
      language: "jsx",
      code: `import FillButton from "velmora"

export function FillButtonDemo() {
  return (
    <FillButton
      fillColor="#38146a"
      textColor="#fff"
      hoverTextColor="#fff"
      duration={350}
      className="fill-button"
    >
      Hover Me
    </FillButton>
  )
}`,
    },

    props: [
      {
        name: "children",
        default: '"Hover Me!"',
        description: "Button content",
      },
      {
        name: "fillColor",
        default: '"#38146a"',
        description: "Fill color",
      },
      {
        name: "textColor",
        default: '"#fff"',
        description: "Default text color",
      },
      {
        name: "hoverTextColor",
        default: '"#fff"',
        description: "Hover text color",
      },
      {
        name: "duration",
        default: "350",
        description: "Fill duration in ms",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "3d-button": {
    title: "3D Button",
    description:
      "A 3D box-style button that rotates around its axis to reveal another face.",

    preview: ThreeDButton,

    previewProps: {
      front: "FRONT",
      back: "BACK",
      duration: 500,
      frontColor: "#323237",
      backColor: "#adadaf",
      textColor: "#adadaf",
      backTextColor: "#323237",
      className: "three-d-button",
    },

    usage: {
      language: "jsx",
      code: `import ThreeDButton from "velmora"

export function ThreeDButtonDemo() {
  return (
    <ThreeDButton
      front="FRONT"
      back="BACK"
      duration={500}
      frontColor="#323237"
      backColor="#adadaf"
      textColor="#adadaf"
      backTextColor="#323237"
    />
  )
}`,
    },

    props: [
      {
        name: "front",
        default: '"Front"',
        description: "Front face content",
      },
      {
        name: "back",
        default: '"Back"',
        description: "Back face content",
      },
      {
        name: "duration",
        default: "500",
        description: "Rotation duration",
      },
      {
        name: "frontColor",
        default: '"#323237"',
        description: "Front background",
      },
      {
        name: "backColor",
        default: '"#adadaf"',
        description: "Back background",
      },
      {
        name: "textColor",
        default: '"#adadaf"',
        description: "Front text color",
      },
      {
        name: "backTextColor",
        default: '"#323237"',
        description: "Back text color",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "submit-button": {
    title: "Submit Button",
    description:
      "A submit interaction with idle, loading, and success states.",

    preview: SubmitButton,

    previewProps: {
      idleText: "SUBMIT",
      loadingText: "SENDING...",
      successText: "SUBMITTED",
      duration: 2250,
      successDuration: 1250,
      color: "#1ECD97",
      loadingColor: "#bbbbbb",
      successColor: "#471ecd",
      className: "submit-button",
    },

    usage: {
      language: "jsx",
      code: `import SubmitButton from "velmora"

export function SubmitButtonDemo() {
  return (
    <SubmitButton
      idleText="SUBMIT"
      loadingText="SENDING..."
      successText="SUBMITTED"
      duration={2250}
      successDuration={1250}
      color="#1ECD97"
      loadingColor="#bbbbbb"
      successColor="#471ecd"
    />
  )
}`,
    },

    props: [
      {
        name: "idleText",
        default: '"SUBMIT"',
        description: "Initial text",
      },
      {
        name: "loadingText",
        default: '"SENDING..."',
        description: "Loading label/API value",
      },
      {
        name: "successText",
        default: '"SUBMITTED"',
        description: "Success label/API value",
      },
      {
        name: "duration",
        default: "2250",
        description: "Loading duration",
      },
      {
        name: "successDuration",
        default: "1250",
        description: "Success duration",
      },
      {
        name: "color",
        default: '"#1ECD97"',
        description: "Primary color",
      },
      {
        name: "loadingColor",
        default: '"#bbbbbb"',
        description: "Spinner color",
      },
      {
        name: "successColor",
        default: '"#471ecd"',
        description: "Success color",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "position-aware-button": {
    title: "Position Aware Button",
    description:
      "A cursor-position-aware circular fill effect. The fill originates from the cursor position.",

    preview: PositionAwareButton,

    previewProps: {
      children: "Position Aware",
      fillColor: "#38146a",
      textColor: "#38146a",
      hoverTextColor: "#fff",
      duration: 400,
      className: "position-button",
    },

    usage: {
      language: "jsx",
      code: `import PositionAwareButton from "velmora"

export function PositionAwareButtonDemo() {
  return (
    <PositionAwareButton
      fillColor="#38146a"
      textColor="#38146a"
      hoverTextColor="#fff"
      duration={400}
      className="position-button"
    >
      Position Aware
    </PositionAwareButton>
  )
}`,
    },

    props: [
      {
        name: "children",
        default: '"POSITION AWARE"',
        description: "Button content",
      },
      {
        name: "fillColor",
        default: '"#333"',
        description: "Circular fill color",
      },
      {
        name: "textColor",
        default: '"#fff"',
        description: "Default text color",
      },
      {
        name: "hoverTextColor",
        default: '"#fff"',
        description: "Hover text color",
      },
      {
        name: "duration",
        default: "400",
        description: "Fill duration in ms",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "typewriter-text": {
    title: "TypeWriter Text",
    description:
      "A typewriter-style text animation that types, pauses, and deletes phrases before moving to the next phrase.",

    preview: TypewriterText,

    previewProps: {
      words: ["Tatva UI", "World", "Velmora"],
      typingSpeed: 200,
      deletingSpeed: 100,
      pauseDuration: 3000,
      className: "typewriter-text",
    },

    usage: {
      language: "jsx",
      code: `import TypeWriterText from "velmora"

export function TypeWriterTextDemo() {
  return (
    <TypeWriterText
      words={["Hello", "World", "Velmora"]}
      typingSpeed={100}
      deletingSpeed={50}
      pauseDuration={1000}
      className="typewriter-text"
    />
  )
}`,
    },

    props: [
      {
        name: "words",
        default: "[]",
        description: "Array of phrases to type and delete",
      },
      {
        name: "typingSpeed",
        default: "100",
        description: "Typing speed in milliseconds",
      },
      {
        name: "deletingSpeed",
        default: "50",
        description: "Deleting speed in milliseconds",
      },
      {
        name: "pauseDuration",
        default: "1000",
        description: "Pause duration between phrases in milliseconds",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "text-scramble": {
    title: "Text Scramble",
    description:
      "A text scrambling effect that transitions between phrases using randomized characters.",

    preview: TextScramble,

    previewProps: {
      phrases: ["Build", "Create", "Animate"],
      pauseDuration: 800,
      className: "scramble-text",
    },

    usage: {
      language: "jsx",
      code: `import TextScramble from "velmora"

export function TextScrambleDemo() {
  return (
    <TextScramble
      phrases={["Build", "Create", "Animate"]}
      pauseDuration={800}
      className="scramble-text"
    />
  )
}`,
    },

    props: [
      {
        name: "phrases",
        default: "[]",
        description: "Array of phrases to scramble between",
      },
      {
        name: "pauseDuration",
        default: "800",
        description: "Pause duration between phrases in milliseconds",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "shadow-text": {
    title: "Shadow Text",
    description:
      "A mouse-reactive text effect where the shadow follows the cursor with smooth movement and dynamic color.",

    preview: ShadowText,

    previewProps: {
      children: "COLORS",
      shadowOffset: 100,
      shadowOpacity: 0.5,
      shadowSaturation: 50,
      shadowLightness: 50,
      smoothing: 0.08,
      className: "shadow-text",
    },

    usage: {
      language: "jsx",
      code: `import ShadowText from "velmora"

export function ShadowTextDemo() {
  return (
    <ShadowText
      shadowOffset={100}
      shadowOpacity={0.5}
      shadowSaturation={50}
      shadowLightness={50}
      smoothing={0.08}
      className="shadow-text"
    >
      COLORS
    </ShadowText>
  )
}`,
    },

    props: [
      {
        name: "children",
        default: '"COLORS"',
        description: "Text content",
      },
      {
        name: "shadowOffset",
        default: "100",
        description: "Shadow offset",
      },
      {
        name: "shadowOpacity",
        default: "0.5",
        description: "Shadow opacity",
      },
      {
        name: "shadowSaturation",
        default: "50",
        description: "Shadow color saturation",
      },
      {
        name: "shadowLightness",
        default: "50",
        description: "Shadow color lightness",
      },
      {
        name: "smoothing",
        default: "0.08",
        description: "Cursor movement smoothing",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "wave-text": {
    title: "Wave Text",
    description:
      "A layered 3D text effect with multiple colored text copies that react smoothly to cursor movement.",

    preview: WaveText,

    previewProps: {
      children: "WAVES",
      colors: ["#f24c00", "#9792e3", "#fc7a1e", "#eda96d"],
      depth: 12,
      rotate: 3,
      skew: 3,
      perspective: 500,
      smoothing: 0.2,
      className: "wave-text",
    },

    usage: {
      language: "jsx",
      code: `import WaveText from "velmora"

export function WaveTextDemo() {
  return (
    <WaveText
      colors={[
        "#f24c00",
        "#9792e3",
        "#fc7a1e",
        "#eda96d"
      ]}
      depth={12}
      rotate={3}
      skew={3}
      perspective={500}
      smoothing={0.2}
      className="wave-text"
    >
      WAVES
    </WaveText>
  )
}`,
    },

    props: [
      {
        name: "children",
        default: '"WAVES"',
        description: "Text content",
      },
      {
        name: "colors",
        default: '["#f24c00", "#9792e3", "#fc7a1e", "#eda96d"]',
        description: "Colors used for the layered text effect",
      },
      {
        name: "depth",
        default: "12",
        description: "3D layer depth",
      },
      {
        name: "rotate",
        default: "3",
        description: "Rotation amount",
      },
      {
        name: "skew",
        default: "3",
        description: "Skew amount",
      },
      {
        name: "perspective",
        default: "500",
        description: "3D perspective value",
      },
      {
        name: "smoothing",
        default: "0.2",
        description: "Cursor movement smoothing",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "magic-text": {
    title: "Magic Text",
    description:
      "A highlighted text effect with animated gradient colors and randomly appearing decorative stars.",

    preview: MagicText,

    previewProps: {
      beforeText: "Sometimes I'll start a line of code and I",
      magicText: "don't even know",
      afterText: "where it's going.",
      colors: ["#7b1fa2", "#673ab7", "#f48fb1"],
      starCount: 3,
      starInterval: 1000,
      starSize: 24,
      className: "magic-text",
    },

    usage: {
      language: "jsx",
      code: `import MagicText from "velmora"

export function MagicTextDemo() {
  return (
    <MagicText
      beforeText="Sometimes I'll start a line of code and I"
      magicText="don't even know"
      afterText="where it's going."
      colors={[
        "#7b1fa2",
        "#673ab7",
        "#f48fb1"
      ]}
      starCount={3}
      starInterval={1000}
      starSize={24}
      className="magic-text"
    />
  )
}`,
    },

    props: [
      {
        name: "beforeText",
        default: `"Sometimes I'll start a line of code and I"`,
        description: "Text displayed before the highlighted text",
      },
      {
        name: "magicText",
        default: `"don't even know"`,
        description: "Highlighted animated text",
      },
      {
        name: "afterText",
        default: `"where it's going."`,
        description: "Text displayed after the highlighted text",
      },
      {
        name: "colors",
        default: '["#7b1fa2", "#673ab7", "#f48fb1"]',
        description: "Gradient colors for the magic text",
      },
      {
        name: "starCount",
        default: "3",
        description: "Number of decorative stars",
      },
      {
        name: "starInterval",
        default: "1000",
        description: "Interval between star appearances in milliseconds",
      },
      {
        name: "starSize",
        default: "24",
        description: "Decorative star size",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "upload-button": {
    title: "Upload Button",
    description:
      "An animated upload interaction with uploading progress and completion states.",

    preview: UploadButton,

    previewProps: {
      filename: "Document.pdf",
      buttonText: "Upload",
      uploadingText: "Uploading...",
      completedText: "Completed",
      uploadDuration: 3000,
      completeDuration: 2000,
      buttonColor: "#3bafda",
      progressColor: "#2d334c",
      className: "my-upload",
    },

    usage: {
      language: "jsx",
      code: `import UploadButton from "velmora"

export function UploadButtonDemo() {
  return (
    <UploadButton
      filename="Document.pdf"
      buttonText="Upload"
      uploadingText="Uploading..."
      completedText="Completed"
      uploadDuration={3000}
      completeDuration={2000}
      buttonColor="#3bafda"
      progressColor="#2d334c"
      className="my-upload"
    />
  )
}`,
    },

    props: [
      {
        name: "filename",
        default: '"File.pdf"',
        description: "File name displayed by the button",
      },
      {
        name: "buttonText",
        default: '"Upload"',
        description: "Initial button label",
      },
      {
        name: "uploadingText",
        default: '"Uploading..."',
        description: "Label shown during upload",
      },
      {
        name: "completedText",
        default: '"Completed"',
        description: "Label shown after upload completes",
      },
      {
        name: "uploadDuration",
        default: "3000",
        description: "Upload animation duration",
      },
      {
        name: "completeDuration",
        default: "2000",
        description: "Completion state duration",
      },
      {
        name: "buttonColor",
        default: '"#3bafda"',
        description: "Button background color",
      },
      {
        name: "progressColor",
        default: '"#2d334c"',
        description: "Upload progress color",
      },
      {
        name: "className",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },
};

export default docs;
