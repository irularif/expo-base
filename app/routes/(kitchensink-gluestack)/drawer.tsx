import {
  Box,
  Button,
  ButtonText,
  Center,
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Heading,
  ScrollView,
  Text,
} from '@pkgs/ui';
import React from 'react';
import { Platform } from 'react-native';
import { examples } from '@app/docs/examples/drawer';

const DrawerDemo = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <ScrollView
      className={`bg-background-0 ${
        examples?.length > 0 ? '' : 'web:justify-center'
      }`}
      contentContainerClassName="px-3 pb-6"
    >
      <Box className="p-5 rounded-lg m-3 mt-5 bg-background-50 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center">
        <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
          Default
        </Text>
        <Center className="flex-1">
          <Button
            onPress={() => {
              setShowDrawer(true);
            }}
          >
            <ButtonText>Show Drawer</ButtonText>
          </Button>
          <Drawer
            isOpen={showDrawer}
            onClose={() => {
              setShowDrawer(false);
            }}
            size={Platform.OS === 'web' ? 'sm' : 'lg'}
          >
            <DrawerBackdrop />
            <DrawerContent className="p-4 sm:p-6 native:pt-[56px]">
              <DrawerHeader>
                <Heading className="text-xl sm:text-3xl">Heading</Heading>
              </DrawerHeader>
              <DrawerBody className="mt-2 sm:mt-3">
                <Text className="text-typography-800 text-base sm:text-xl">
                  This is a sentence.
                </Text>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  onPress={() => {
                    setShowDrawer(false);
                  }}
                  className="flex-1"
                >
                  <ButtonText>Button</ButtonText>
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Center>
      </Box>

      {examples?.length > 0 &&
        examples.map((Example: any, index: any) => {
          const isFunctionComponent = typeof Example.Code === 'function'; // Check if Code is a function
          return (
            <Box
              key={index}
              className="p-5 border border-outline-100 rounded-lg my-2.5 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center"
            >
              <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
                {Example.name}
              </Text>
              <Center className="flex-1">
                {isFunctionComponent ? <Example.Code /> : Example.Code}
              </Center>
            </Box>
          );
        })}
    </ScrollView>
  );
};

export default DrawerDemo;
