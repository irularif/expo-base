import { Box, Center, ScrollView, Text, VStack } from '@pkgs/ui';
import React from 'react';
import { examples } from '@app/docs/examples/vstack';

const VStackDemo = () => {
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
          <VStack
            space="md"
            className="w-full max-w-[400px] h-full min-h-[300px]"
          >
            <Box className="grow-[1] border border-dashed border-outline-400 rounded-lg bg-background-0 w-full" />
            <Box className="grow-[2] border border-dashed border-outline-400 rounded-lg bg-background-0 w-full" />
            <Box className="grow-[2] border border-dashed border-outline-400 rounded-lg bg-background-0 w-full" />
          </VStack>
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

export default VStackDemo;
