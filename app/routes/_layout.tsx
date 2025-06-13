import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { AppProvider } from '@pkgs/providers';
import { Stack } from 'expo-router';
import React from 'react';

import '@assets/global.css';

export default function RootLayout() {
  return (
    <AppProvider>
      <OverlayProvider>
        <ToastProvider>
          <Stack
            screenOptions={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          >
            <Stack.Screen name="+not-found" />
          </Stack>
        </ToastProvider>
      </OverlayProvider>
    </AppProvider>
  );
}
