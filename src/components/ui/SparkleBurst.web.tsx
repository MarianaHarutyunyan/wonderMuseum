/**
 * Web build of `SparkleBurst`. `lottie-react-native`'s web renderer depends on
 * `@lottiefiles/dotlottie-react`, which this project doesn't install — the sparkle effect is
 * purely decorative, so on web it's a no-op rather than pulling in an extra web-only dependency.
 */
export function SparkleBurst() {
  return null;
}
