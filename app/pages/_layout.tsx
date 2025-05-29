import "@assets/global.css";
import AppProvider from "@pkgs/components/providers/App";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen name="(kitchensink)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
