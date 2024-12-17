import { style } from "@vanilla-extract/css";

export const RadixRoot = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%", 
  height: "20px",
});

export const SliderTrack = style({
  backgroundColor: "#ddd",
  position: "relative",
  flexGrow: 1,
  borderRadius: "4px",
  height: "6px",
});

export const SliderRange = style({
  position: "absolute",
  backgroundColor: "#41FCAE",
  borderRadius: "4px",
  height: "100%",
});

export const SliderThumb = style({
  display: "block",
  width: "16px",
  height: "16px",
  backgroundColor: "#41FCAE",
  border: "2px solid white",
  borderRadius: "50%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  outline: "none",
  cursor: "pointer",
});
