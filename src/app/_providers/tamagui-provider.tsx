"use client";
import { config } from "@/../tamagui.config";
import { useRootTheme } from "@tamagui/next-theme";

import { TamaguiProvider as _TamaguiProvider } from "tamagui";

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
