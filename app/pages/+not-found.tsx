import React, { useEffect } from "react";
import { Text } from "@pkgs/components/ui/text";
import { View } from "@pkgs/components/ui/view";
import { router } from "expo-router";

export default function HomeScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Component not found. Redirecting to home page...</Text>
    </View>
  );
}
