import React from "react";
import { Fab, FabIcon } from "@pkgs-ext/gluestack/ui/fab";
import { Box } from "@pkgs-ext/gluestack/ui/box";
import { Icon, HelpCircleIcon, ExternalLinkIcon } from "@pkgs-ext/gluestack/ui/icon";
import { Center } from "@pkgs-ext/gluestack/ui/center";
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from "@pkgs-ext/gluestack/ui/menu";
import { ScrollView } from "@pkgs-ext/gluestack/ui/scroll-view";
import { examples } from "@pkgs-ext/gluestack/docs/examples/fab";
import { Text } from "@pkgs-ext/gluestack/ui/text";

const FabDemo = () => {
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
          <Menu
            offset={5}
            placement="top right"
            trigger={({ ...triggerProps }) => {
              return (
                <Box className="h-[200px] w-[250px] bg-background-0 rounded-lg border border-outline-200 shadow-hard-5">
                  <Fab placement={"bottom right"} {...triggerProps}>
                    <FabIcon as={HelpCircleIcon} />
                  </Fab>
                </Box>
              );
            }}
          >
            <MenuItem
              key="help"
              textValue="help"
              className="p-3 justify-between"
            >
              <MenuItemLabel size="sm">Visit Help</MenuItemLabel>
              <Icon as={ExternalLinkIcon} size="sm" className="ml-2" />
            </MenuItem>
            <MenuSeparator />
            <MenuItem key="privacy" textValue="privacy" className="p-3">
              <MenuItemLabel size="sm">Privacy Policy</MenuItemLabel>
            </MenuItem>
            <MenuItem key="ads" textValue="ads" className="p-3">
              <MenuItemLabel size="sm">Personalized Ads</MenuItemLabel>
            </MenuItem>
            <MenuItem key="terms" textValue="terms" className="p-3">
              <MenuItemLabel size="sm">Terms</MenuItemLabel>
            </MenuItem>
          </Menu>
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

export default FabDemo;
