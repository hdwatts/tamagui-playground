"use client";
import NextTamaguiSupport from "./next-tamagui-support";

import TamaguiProvider from "./tamagui-provider";
import TamaguiThemeProvider from "./tamagui-theme-provider";

import BothCombined from "./both-combined";

const Providers = ({ children }) => (
  <NextTamaguiSupport>
    <TamaguiThemeProvider>
      <TamaguiProvider>{children}</TamaguiProvider>
    </TamaguiThemeProvider>
  </NextTamaguiSupport>
);

const BothCombinedProvider = ({ children }) => (
  <NextTamaguiSupport>
    <BothCombined>{children}</BothCombined>
  </NextTamaguiSupport>
);

// Uncomment me to break
export default Providers;
// Uncomment me to work
// export default BothCombinedProvider;
