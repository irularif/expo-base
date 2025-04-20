import EditScreenInfo from "@pkgs/components/EditScreenInfo";
import { Center } from "@pkgs/components/ui/center";
import { Divider } from "@pkgs/components/ui/divider";
import { Heading } from "@pkgs/components/ui/heading";
import { Text } from "@pkgs/components/ui/text";

export default function Home() {
  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl">Expo V3</Heading>
      <Divider className="my-[30px] w-[80%]" />
      <Text className="p-4">Example below to use gluestack-ui components.</Text>
      <EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
    </Center>
  );
}
