"use client";

import React, { Suspense } from "react";
import { ScrollView, Switch, Theme, YStack, Text } from "tamagui";
import { ThemeToggle } from "./_components/theme-toggle";
import { useThemeSetting } from "@tamagui/next-theme";

export default function Home() {
  const { resolvedTheme, current } = useThemeSetting();
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="$10"
      space="$4"
    >
      <div>This doesn&apos;t work</div>
      <Switch>
        <Switch.Thumb animation="bouncy" />
      </Switch>

      <div>This works</div>
      {/* Suspense is also needed to avoid a nextjs hydration error */}
      {/* Something to look at */}

      <Theme name={current}>
        <Switch>
          <Switch.Thumb animation="bouncy" />
        </Switch>
      </Theme>

      <ThemeToggle />
      <div>
        To make both work, go to: <code>_providers/index.tsx</code> and change
        the default export.
      </div>
    </YStack>
  );
}
