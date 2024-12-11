import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./default_logo.png",
  fullDecal: "./default_logo.png",
});

export default state;
