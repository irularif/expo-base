import React from "react";
import { Box } from "@pkgs-ext/gluestack/ui/box";
import { Center } from "@pkgs-ext/gluestack/ui/center";
import { ScrollView } from "@pkgs-ext/gluestack/ui/scroll-view";
import { examples } from "@pkgs-ext/gluestack/docs/examples/box";
import { Text } from "@pkgs-ext/gluestack/ui/text";

const BoxDemo = () => {
  return (
    <ScrollView
      className={`bg-background-0 ${examples?.length > 0 ? "" : "web:justify-center"}`}
      contentContainerClassName="px-3 pb-6"
    >
      <Box className="p-5 rounded-lg m-3 mt-5 bg-background-50 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center">
        <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
          Default
        </Text>
        <Center className="flex-1">
          <Box className="flex flex-col p-6 rounded-xl border-dashed border-[3px] border-outline-200 bg-background-50 max-w-[406px] w-full">
            <Box className="bg-background-0 h-[180px] self-stretch rounded-lg mb-6" />
            <Box className="bg-background-0 h-[40px] self-stretch rounded-lg" />
            <Box className="bg-background-0 h-[24px] my-3 self-stretch rounded-lg" />
            <Box className="bg-background-0 h-[24px] self-stretch rounded-lg" />
          </Box>
        </Center>
      </Box>

      {examples?.length > 0 &&
        examples.map((Example: any, index: any) => {
          const isFunctionComponent = typeof Example.Code === "function"; // Check if Code is a function
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

export default BoxDemo;
