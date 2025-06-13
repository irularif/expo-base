import { Text, View } from '@pkgs/ui';
import { router } from 'expo-router';
import React, { useEffect } from 'react';

export default function HomeScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Component not found. Redirecting to home page...</Text>
    </View>
  );
}
