import "@assets/global.css";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";
import AppProvider from "@pkgs/providers/App";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <AppProvider>
      <OverlayProvider>
        <ToastProvider>
          <Stack screenOptions={{ animation: "slide_from_right" }}>
            <Stack.Screen
              name="(kitchensink-gluestack)"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          </Stack>
        </ToastProvider>
      </OverlayProvider>
    </AppProvider>
  );
}
