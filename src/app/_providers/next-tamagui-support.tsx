"use client";

import React, { useMemo, useState } from "react";

import { config } from "@/../tamagui.config";
import { useServerInsertedHTML } from "next/navigation";

export const NextTamaguiSupport: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useServerInsertedHTML(() => {
    // this first time this runs you'll get the full CSS including all themes
    // after that, it will only return CSS generated since the last call
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: config.getCSS({
              exclude:
                process.env.NODE_ENV === "development" ? null : "design-system",
            }),
          }}
        />
        {config.getNewCSS()}
      </>
    );
  });

  // memo to avoid re-render on dark/light change

  // because we do our custom getCSS() above, we disableInjectCSS here
  return <>{children}</>;
};

export default NextTamaguiSupport;
