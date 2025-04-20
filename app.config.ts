import { ExpoConfig } from "expo/config";

const IS_DEV = process.env.EXPO_PUBLIC_APP_VARIANT === "development";
const googleServicesFile = process.env.GOOGLE_SERVICES_JSON;
const appVersion = "1.0.0";
const runtimeVersion = "1.0.0";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.base.dev";
  }

  return "com.base";
};

const getAppName = () => {
  if (IS_DEV) {
    return "- Base App -";
  }

  return "Base App";
};

const newConfig: ExpoConfig = {
  name: getAppName(),
  slug: "base-mobile",
  owner: "k1project",
  version: runtimeVersion,
  scheme: "base",
  runtimeVersion,
  platforms: ["android", "ios"],
  extra: {
    eas: {
      projectId: "a3088247-6cda-437a-8ea1-f7b7c04ad06a",
    },
    appVersion,
  },
  updates: {
    url: "https://u.expo.dev/a3088247-6cda-437a-8ea1-f7b7c04ad06a",
  },
  orientation: "portrait",
  icon: "./app/assets/images/adaptive-icon.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  assetBundlePatterns: ["**/*"],
  plugins: [
    [
      "expo-router",
      {
        root: "./app/pages",
      },
    ],
    [
      "expo-splash-screen",
      {
        image: "./app/assets/images/adaptive-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "expo-font",
    [
      "expo-dev-client",
      {
        launchMode: "most-recent",
      },
    ],
    [
      "expo-image-picker",
      {
        photosPermission:
          "The app accesses your photos to let you share them with your friends.",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    buildNumber: "1",
    supportsTablet: false,
    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    package: getUniqueIdentifier(),
    googleServicesFile,
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./app/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    permissions: [],
    blockedPermissions: ["android.permission.RECORD_AUDIO"],
  },
};

export default newConfig;
