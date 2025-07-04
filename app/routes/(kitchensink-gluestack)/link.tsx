import {
  Box,
  Center,
  HStack,
  Icon,
  Link,
  LinkText,
  ScrollView,
  Text,
} from '@pkgs/ui';
import { Twitter, Youtube } from 'lucide-react-native';
import React from 'react';
import { examples } from '@app/docs/examples/link';

const LinkDemo = () => {
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
          <HStack className="gap-10 w-full max-w-[336px] p-6 bg-background-50 rounded-full justify-center">
            <Link
              href="https://x.com/gluestack"
              isExternal
              className="flex flex-row justify-center items-center gap-2"
            >
              <Icon
                size="xl"
                as={Twitter}
                className="text-info-800 fill-info-800"
              />
              <LinkText className="no-underline">Twitter</LinkText>
            </Link>
            <Link
              href="https://www.youtube.com/@GeekyAnts"
              isExternal
              className="flex flex-row justify-center items-center gap-2"
            >
              <Icon size="xl" as={Youtube} className="text-info-800" />
              <LinkText className="no-underline">Youtube</LinkText>
            </Link>
          </HStack>
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

export default LinkDemo;
