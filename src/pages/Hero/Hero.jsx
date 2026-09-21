import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import GradientBlinds from "../../effects/GradientBlinds/GradientBlinds";
import Navbar from "../../components/Navbar/Navbar";
import { TextScramble } from "velmora";
import "velmora/style.css";

import { applyLiquidGlass } from "../../effects/liquidGlass/liquidGlass";

import "./hero.css";
import AcidSquares from "../../effects/AcidSquares/AcidSquares";
import Silk from "../../effects/Silk/Silk";

const Hero = () => {
  const getStartedRef = useRef(null);
  const githubRef = useRef(null);

  useEffect(() => {
    if (!getStartedRef.current || !githubRef.current) return;

    const glassConfig = {
      glassThickness: 35,
      bezelWidth: 18,
      ior: 1.35,
      scaleRatio: 0.65,
      blur: 0.8,
      specularOpacity: 0.8,
      specularSat: 0,
      tintColor: "255,255,255",
      tintOpacity: 0.035,
      innerShadow: "rgba(255,255,255,0.18)",
      innerShadowBlur: 12,
      innerShadowSpread: -1,
      balancedSpecular: true,
    };

    const cleanupGetStarted = applyLiquidGlass(getStartedRef.current, {
      glassThickness: 70,
      bezelWidth: 20,
      ior: 1.4,
      scaleRatio: 1,
      blur: 0.8,
      specularOpacity: 0.65,
      specularSat: 0,
      tintColor: "255,255,255",
      tintOpacity: 0.025,
      innerShadow: "rgba(255,255,255,0.16)",
      innerShadowBlur: 12,
      innerShadowSpread: -1,
      balancedSpecular: true,
    });

    const cleanupGithub = applyLiquidGlass(githubRef.current, {
      glassThickness: 55,
      bezelWidth: 18,
      ior: 1.4,
      scaleRatio: 0.9,
      blur: 0.7,
      specularOpacity: 0.55,
      specularSat: 0,
      tintColor: "255,255,255",
      tintOpacity: 0.025,
      innerShadow: "rgba(255,255,255,0.14)",
      innerShadowBlur: 10,
      innerShadowSpread: -1,
      balancedSpecular: true,
    });

    return () => {
      cleanupGetStarted();
      cleanupGithub();
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        {/* <GradientBlinds /> */}
        
        {/* <Silk
          speed={5}
          scale={1}
          color="#b000c4"
          noiseIntensity={2}
          rotation={0}
        /> */}
      </div>

      <div className="hero-content">
        <Navbar />

        <div className="hero-main-content">
          <div className="hero-heading">
            <h1>Craft your UI with</h1>

            <div className="scramble-wrapper">
              <TextScramble
                phrases={[
                  "ease.",
                  "motion.",
                  "precision.",
                  "detail.",
                  "feeling.",
                ]}
                pauseDuration={2000}
                className="heading-scramble"
              />
            </div>
          </div>

          <div className="hero-para">
            <p>
              Breathe life into your website with beautifully designed animated
              components, a collection of stunning motion components designed to
              captivate.
            </p>
          </div>

          <div className="hero-buttons">
            <Link
              ref={getStartedRef}
              to={"/docs/installation"}
              className="hero-btn"
              data-radius="14"
            >
              <span>Get Started</span>
              <span className="arrow">→</span>
            </Link>

            <a
              ref={githubRef}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
              data-radius="14"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
