import {
  AddIcon,
  Box,
  Button,
  ButtonText,
  Center,
  GlobeIcon,
  Icon,
  Menu,
  MenuItem,
  MenuItemLabel,
  PlayIcon,
  ScrollView,
  SettingsIcon,
  Text,
} from '@pkgs/ui';
import React from 'react';
import { examples } from '@app/docs/examples/menu';

const MenuDemo = () => {
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
          <Menu
            placement="top"
            offset={5}
            disabledKeys={['Settings']}
            trigger={({ ...triggerProps }) => {
              return (
                <Button {...triggerProps}>
                  <ButtonText>Menu</ButtonText>
                </Button>
              );
            }}
          >
            <MenuItem key="Add account" textValue="Add account">
              <Icon as={AddIcon} size="sm" className="mr-2" />
              <MenuItemLabel size="sm">Add account</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Community" textValue="Community">
              <Icon as={GlobeIcon} size="sm" className="mr-2" />
              <MenuItemLabel size="sm">Community</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Plugins" textValue="Plugins">
              <Icon as={PlayIcon} size="sm" className="mr-2" />
              <MenuItemLabel size="sm">Plugins</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Settings" textValue="Settings">
              <Icon as={SettingsIcon} size="sm" className="mr-2" />
              <MenuItemLabel size="sm">Settings</MenuItemLabel>
            </MenuItem>
          </Menu>
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

export default MenuDemo;
