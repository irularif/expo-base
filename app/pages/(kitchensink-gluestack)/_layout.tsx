import "@assets/global.css";
import { Fab } from "@pkgs-ext/gluestack/ui/fab";
import {
  ChevronLeftIcon,
  Icon,
  MoonIcon,
  SunIcon,
} from "@pkgs-ext/gluestack/ui/icon";
import { Pressable } from "@pkgs-ext/gluestack/ui/pressable";
import useAppConfig from "@pkgs/hooks/useAppConfig";
import { AppColorScheme } from "@pkgs/constants/Theme";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo } from "react";
import { Platform, StyleSheet } from "react-native";

const CustomBackButton = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.back();
      }}
      className="web:ml-2 ios:-ml-2 android:mr-4"
    >
      <Icon as={ChevronLeftIcon} size="xl" />
    </Pressable>
  );
};

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useAppConfig();

  const isLight = useMemo(
    () => colorScheme === AppColorScheme.LIGHT,
    [colorScheme]
  );

  const handleColorMode = useCallback(() => {
    setColorScheme(isLight ? AppColorScheme.DARK : AppColorScheme.LIGHT);
  }, [colorScheme, setColorScheme]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          backgroundColor: isLight ? "#fff" : "#000",
          borderBottomColor: isLight ? "#E6E6E6" : "#414141",
          borderBottomWidth: 1,
        },
      }),
    [isLight]
  );

  const getHeaderOptions = useCallback(
    (title: string) => ({
      headerTitle: title,
      headerTintColor: isLight ? "#000" : "#fff",
      headerStyle: styles.header,
      ...(Platform.OS !== "android" && {
        headerLeft: () => <CustomBackButton />,
      }),
    }),
    [isLight, styles.header]
  );
  return (
    <>
      <StatusBar
        style="auto" //android
        backgroundColor={`${isLight ? "#F6F6F6" : "#272625"}`}
      />
      <Stack screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="accordion"
          options={getHeaderOptions("Accordion")}
        />
        <Stack.Screen
          name="actionsheet"
          options={getHeaderOptions("ActionSheet")}
        />
        <Stack.Screen name="alert" options={getHeaderOptions("Alert")} />
        <Stack.Screen
          name="alert-dialog"
          options={getHeaderOptions("AlertDialog")}
        />
        <Stack.Screen name="avatar" options={getHeaderOptions("Avatar")} />
        <Stack.Screen name="badge" options={getHeaderOptions("Badge")} />
        <Stack.Screen name="box" options={getHeaderOptions("Box")} />
        <Stack.Screen name="button" options={getHeaderOptions("Button")} />
        <Stack.Screen name="card" options={getHeaderOptions("Card")} />
        <Stack.Screen name="center" options={getHeaderOptions("Center")} />
        <Stack.Screen name="checkbox" options={getHeaderOptions("Checkbox")} />
        <Stack.Screen name="divider" options={getHeaderOptions("Divider")} />
        <Stack.Screen name="drawer" options={getHeaderOptions("Drawer")} />
        <Stack.Screen name="fab" options={getHeaderOptions("Fab")} />
        <Stack.Screen
          name="form-control"
          options={getHeaderOptions("FormControl")}
        />
        <Stack.Screen name="grid" options={getHeaderOptions("Grid")} />
        <Stack.Screen name="heading" options={getHeaderOptions("Heading")} />
        <Stack.Screen name="hstack" options={getHeaderOptions("HStack")} />
        <Stack.Screen name="icon" options={getHeaderOptions("Icon")} />
        <Stack.Screen name="image" options={getHeaderOptions("Image")} />
        <Stack.Screen name="input" options={getHeaderOptions("Input")} />
        <Stack.Screen name="link" options={getHeaderOptions("Link")} />
        <Stack.Screen name="menu" options={getHeaderOptions("Menu")} />
        <Stack.Screen name="modal" options={getHeaderOptions("Modal")} />
        <Stack.Screen name="popover" options={getHeaderOptions("Popover")} />
        <Stack.Screen name="portal" options={getHeaderOptions("Portal")} />
        <Stack.Screen
          name="pressable"
          options={getHeaderOptions("Pressable")}
        />
        <Stack.Screen name="progress" options={getHeaderOptions("Progress")} />
        <Stack.Screen name="radio" options={getHeaderOptions("Radio")} />
        <Stack.Screen name="select" options={getHeaderOptions("Select")} />
        <Stack.Screen name="skeleton" options={getHeaderOptions("Skeleton")} />
        <Stack.Screen name="slider" options={getHeaderOptions("Slider")} />
        <Stack.Screen name="spinner" options={getHeaderOptions("Spinner")} />
        <Stack.Screen name="switch" options={getHeaderOptions("Switch")} />
        <Stack.Screen name="table" options={getHeaderOptions("Table")} />
        <Stack.Screen name="text" options={getHeaderOptions("Text")} />
        <Stack.Screen name="textarea" options={getHeaderOptions("TextArea")} />
        <Stack.Screen name="toast" options={getHeaderOptions("Toast")} />
        <Stack.Screen name="tooltip" options={getHeaderOptions("Tooltip")} />
        <Stack.Screen name="vstack" options={getHeaderOptions("VStack")} />
      </Stack>

      <Fab
        className="bottom-10 sm:right-10 right-6 p-4 z-0"
        onPress={handleColorMode}
      >
        <Icon
          as={colorScheme === AppColorScheme.LIGHT ? SunIcon : MoonIcon}
          className="text-typography-0"
        />
      </Fab>
    </>
  );
}
