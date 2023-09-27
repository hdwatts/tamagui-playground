import { createAnimations } from "@tamagui/animations-css";
import type { AnimationDriver } from "@tamagui/web";

export const animations: AnimationDriver = createAnimations({
  bouncy: "0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: "0.2s ease-in",
});
