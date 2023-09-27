"use client";
import { config } from "@/../tamagui.config";

import { TamaguiProvider as _TamaguiProvider } from "tamagui";
import {
  useRootTheme,
  ColorScheme,
  NextThemeProvider,
} from "@tamagui/next-theme";

const BothCombined = ({ children }) => {
  const [theme, setTheme] = useRootTheme();

  return (
    <NextThemeProvider onChangeTheme={(str) => setTheme(str as ColorScheme)}>
      <_TamaguiProvider
        config={config}
        disableInjectCSS
        disableRootThemeClass
        defaultTheme={theme}
      >
        {children}
      </_TamaguiProvider>
    </NextThemeProvider>
  );
};

export default BothCombined;
