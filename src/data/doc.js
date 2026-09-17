const docs = {
    introduction: {
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
  UploadButton
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
  UploadButton
} from "velmora";

import "velmora/styles.css";

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

        usage: {
            language: "jsx",
            code: `<MagneticButton
  strength={0.35}
  radius={150}
  ease={0.15}
  className="magnetic-button"
>
  Magnetic
</MagneticButton>`,
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

        usage: {
            language: "jsx",
            code: `<FlipButton
  front="FRONT"
  back="BACK"
  duration={500}
  frontColor="#323237"
  backColor="#adadaf"
  textColor="#adadaf"
  backTextColor="#323237"
/>`,
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
        description:
            "An expanding fill effect that fills the button on hover.",

        usage: {
            language: "jsx",
            code: `<FillButton
  fillColor="#38146a"
  textColor="#fff"
  hoverTextColor="#fff"
  duration={350}
  className="fill-button"
>
  Hover Me
</FillButton>`,
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

        usage: {
            language: "jsx",
            code: `<ThreeDButton
  front="FRONT"
  back="BACK"
  duration={500}
  frontColor="#323237"
  backColor="#adadaf"
  textColor="#adadaf"
  backTextColor="#323237"
/>`,
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

        usage: {
            language: "jsx",
            code: `<SubmitButton
  idleText="SUBMIT"
  loadingText="SENDING..."
  successText="SUBMITTED"
  duration={2250}
  successDuration={1250}
  color="#1ECD97"
  loadingColor="#bbbbbb"
  successColor="#471ecd"
/>`,
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

        usage: {
            language: "jsx",
            code: `<PositionAwareButton
  fillColor="#38146a"
  textColor="#38146a"
  hoverTextColor="#fff"
  duration={400}
  className="position-button"
>
  Position Aware
</PositionAwareButton>`,
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

    "upload-button": {
        title: "Upload Button",
        description:
            "An animated upload interaction with uploading progress and completion states.",

        usage: {
            language: "jsx",
            code: `<UploadButton
  filename="Document.pdf"
  buttonText="Upload"
  uploadingText="Uploading..."
  completedText="Completed"
  uploadDuration={3000}
  completeDuration={2000}
  buttonColor="#3bafda"
  progressColor="#2d334c"
  className="my-upload"
/>`,
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