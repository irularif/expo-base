import { ExpoConfig } from 'expo/config';

const mode = process.env.MODE;
const isDev = mode === 'development';

const appName = process.env.APP_NAME ?? 'Base App';
const appIdentifier = process.env.APP_IDENTIFIER ?? 'com.karf.baseapp';
const projectId = 'a3088247-6cda-437a-8ea1-f7b7c04ad06a';
const googleServicesFile = process.env.GOOGLE_SERVICES_JSON;
const scheme = ['base'];
const appVersion = '0.0.1';

const owner = 'k1project';
const slug = 'base-mobile';
// This should use to determine the runtime version for ota updates
// change this for adding new native modules
// and for the new architecture
const runtimeVersion = '0.0.1';

const getUniqueIdentifier = () => {
  if (isDev) {
    return appIdentifier + '.dev';
  }

  return appIdentifier;
};

const getAppName = () => {
  if (isDev) {
    return `- ${appName} -`;
  }

  return appName;
};

const newConfig: ExpoConfig = {
  name: getAppName(),
  slug,
  owner,
  version: runtimeVersion,
  scheme,
  runtimeVersion,
  platforms: ['android', 'ios'],
  extra: {
    eas: {
      projectId,
    },
    appVersion,
    isDev,
    mode,
  },
  updates: {
    url: 'https://u.expo.dev/' + projectId,
  },
  orientation: 'portrait',
  icon: './app/assets/images/adaptive-icon.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  assetBundlePatterns: ['**/*'],
  plugins: [
    [
      'expo-router',
      {
        root: './app/routes',
      },
    ],
    [
      'expo-splash-screen',
      {
        image: './app/assets/images/adaptive-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    ],
    'expo-font',
    [
      'expo-dev-client',
      {
        launchMode: 'most-recent',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you share them with your friends.',
      },
    ],
    'expo-web-browser',
  ],
  experiments: {
    typedRoutes: true,
  },
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    buildNumber: '1',
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
      foregroundImage: './app/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    permissions: [],
    blockedPermissions: ['android.permission.RECORD_AUDIO'],
  },
};

export default newConfig;
