import AnimatedCursor from "react-animated-cursor";

export default function CustomAnimatedCursor() {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={12}
      color="193, 11, 111"
      outerAlpha={0.8}
      innerScale={0.7}
      outerScale={10}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
