"use client";
import {
  ColorScheme,
  NextThemeProvider,
  useRootTheme,
} from "@tamagui/next-theme";

const TamaguiThemeProvider = ({ children }) => {
  const [_, setTheme] = useRootTheme();

  return (
    <NextThemeProvider onChangeTheme={(str) => setTheme(str as ColorScheme)}>
      {children}
    </NextThemeProvider>
  );
};

export default TamaguiThemeProvider;
