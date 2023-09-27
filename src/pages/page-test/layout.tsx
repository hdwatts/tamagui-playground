import "./globals.css";
import "@tamagui/core/reset.css";
import { Inter } from "next/font/google";
import Providers from "../../app/_providers/";
import NextSupport from "../../app/_providers/next-tamagui-support";

if (process.env.NODE_ENV === "production") {
  require("../public/tamagui.css");
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <NextSupport>{children}</NextSupport>
    </Providers>
  );
}
