import type { ImageStyle } from "react-native";

export const HERO_IMAGE = require("./hero.png");
export const MUSEUM_IMAGE = require("./museum1.png");

/** Natural pixel dimensions of hero.png, used to derive crop math below. */
const HERO_IMAGE_WIDTH = 1024;
const HERO_IMAGE_HEIGHT = 1536;

/** Square region (in hero.png's native pixels) tightly framing the hero's face + hat. */
const HERO_FACE_CROP = { x: 260, y: 60, size: 460 };

/**
 * Image style that zooms/pans hero.png so only the face shows, sized to fill a square
 * of `boxSize` points — used to render the hero's face inside a round Avatar.
 */
export function getHeroFaceCropStyle(boxSize: number): ImageStyle {
  const scale = boxSize / HERO_FACE_CROP.size;
  return {
    width: HERO_IMAGE_WIDTH * scale,
    height: HERO_IMAGE_HEIGHT * scale,
    marginLeft: -HERO_FACE_CROP.x * scale,
    marginTop: -HERO_FACE_CROP.y * scale,
  };
}
