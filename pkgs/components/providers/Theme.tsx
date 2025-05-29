import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";
import { AppColorScheme } from "@pkgs/constants/Theme";
import { IAppProvider } from "@pkgs/types/provider";
import { useColorScheme } from "nativewind";
import React, { useCallback, useEffect, useMemo } from "react";
import { View } from "react-native";
import { defaultColors } from "../ui/gluestack-ui-provider/defaultColors";
import useAppConfigState from "@pkgs/store/useAppConfigState";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";

let colors = defaultColors;
try {
  const custom = require("@app/config/colors");
  if (custom?.default || custom?.colors) {
    colors = custom.default ?? custom?.colors ?? colors;
  }
} catch (error) {
  console.warn("Failed to load user colors, using default colors.");
}

export function ThemeProvider({
  config = {},
  children,
}: Partial<IAppProvider>) {
  const { colorScheme: defaultColorScheme = AppColorScheme.LIGHT } = config;
  const { colorScheme = "light", setColorScheme } = useColorScheme();
  const appColorScheme = useAppConfigState((state) => state.colorScheme);

  const handleColorSchemeChange = useCallback((scheme: AppColorScheme) => {
    if (!appColorScheme) {
      useAppConfigState.setState((prev) => ({
        ...prev,
        colorScheme: scheme,
      }));
    }
  }, []);

  useEffect(() => {
    handleColorSchemeChange(defaultColorScheme);
  }, [defaultColorScheme]);

  useEffect(() => {
    if (appColorScheme && appColorScheme !== colorScheme) {
      setColorScheme(appColorScheme);
    }
  }, [appColorScheme, colorScheme]);

  const themeColors = useMemo(() => {
    return colors[colorScheme!];
  }, [colorScheme]);

  return (
    <View
      style={[
        themeColors,
        // eslint-disable-next-line react-native/no-inline-styles
        { flex: 1, height: "100%", width: "100%", backgroundColor: "white" },
      ]}
    >
      <NavigationThemeProvider
        value={colorScheme === AppColorScheme.DARK ? DarkTheme : DefaultTheme}
      >
        <OverlayProvider>
          <ToastProvider>{children}</ToastProvider>
        </OverlayProvider>
      </NavigationThemeProvider>
    </View>
  );
}
