"use client";
import { useRootTheme } from "@tamagui/next-theme";

import { TamaguiProvider as _TamaguiProvider } from "tamagui";

import { config } from "@/../tamagui.config";

const TamaguiProvider = ({ children }) => {
  const [theme] = useRootTheme();
  return (
    <_TamaguiProvider
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={theme}
    >
      {children}
    </_TamaguiProvider>
  );
};

export default TamaguiProvider;
