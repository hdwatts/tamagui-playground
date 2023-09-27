"use client";

import TamaguiProvider from "./tamagui-provider";
import TamaguiThemeProvider from "./tamagui-theme-provider";

import BothCombined from "./both-combined";

const Providers = ({ children }) => (
  <TamaguiThemeProvider>
    <TamaguiProvider>{children}</TamaguiProvider>
  </TamaguiThemeProvider>
);

const BothCombinedProvider = ({ children }) => (
  <BothCombined>{children}</BothCombined>
);

// Uncomment me to break
export default Providers;
// Uncomment me to work
// export default BothCombinedProvider;
