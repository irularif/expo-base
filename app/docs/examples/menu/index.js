import React from 'react';
import {
  Icon,
  HelpCircleIcon,
  MenuIcon,
  MessageCircleIcon,
  SettingsIcon,
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
  Button,
  ButtonText,
  ButtonIcon,
  Badge,
  BadgeText,
} from '@pkgs/ui';
export const examples = [
  {
    name: 'Menu with Tag',
    Code: function Example() {
      return (
        <Menu
          offset={5}
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps} size="sm">
                <ButtonIcon as={MenuIcon} />
              </Button>
            );
          }}
        >
          <MenuItem
            key="Membership"
            textValue="Membership"
            className="p-2 justify-between"
          >
            <MenuItemLabel size="sm">Membership</MenuItemLabel>
            <Badge action="success" className="rounded-full">
              <BadgeText className="text-2xs capitalize">Pro</BadgeText>
            </Badge>
          </MenuItem>
          <MenuItem key="Orders" textValue="Orders" className="p-2">
            <MenuItemLabel size="sm">Orders</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Address Book" textValue="Address Book" className="p-2">
            <MenuItemLabel size="sm">Address Book</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem
            key="Earn & Redeem"
            textValue="Earn & Redeem"
            className="p-2"
          >
            <MenuItemLabel size="sm">Earn & Redeem</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Coupons" textValue="Coupons" className="p-2">
            <MenuItemLabel size="sm">Coupons</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Help Center" textValue="Help Center" className="p-2">
            <MenuItemLabel size="sm">Help Center</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem key="Logout" textValue="Logout" className="p-2">
            <MenuItemLabel size="sm">Logout</MenuItemLabel>
          </MenuItem>
        </Menu>
      );
    },
  },
  {
    name: 'Menu with Selection',
    Code: function Example() {
      const [selected, setSelected] = React.useState(new Set([]));
      return (
        <Menu
          placement="bottom left"
          selectionMode="single"
          selectedKeys={selected}
          offset={5}
          className="p-1.5"
          onSelectionChange={(keys) => {
            setSelected(keys);
            if (keys.currentKey === 'Account Setting') {
              console.log('Push to', keys.currentKey, 'route');
            } else if (keys.currentKey === 'Help Centre') {
              console.log('Push to', keys.currentKey, 'route');
            } else if (keys.currentKey === 'Contact Support') {
              console.log('Push to', keys.currentKey, 'route');
            } else if (keys.currentKey === 'Download Mobile App') {
              console.log('Push to', keys.currentKey, 'route');
            } else if (keys.currentKey === 'Install Chrome Extension') {
              console.log('Push to', keys.currentKey, 'route');
            }
          }}
          closeOnSelect={true}
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps}>
                <ButtonText>Menu</ButtonText>
              </Button>
            );
          }}
        >
          <MenuItem
            key="Account Settings"
            textValue="Account Settings"
            className="p-2 web:min-w-[294px] min-w-[225px]"
          >
            <Icon as={SettingsIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Account Settings</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Help Centre" textValue="Help Centre" className="p-2">
            <Icon as={HelpCircleIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Help Centre</MenuItemLabel>
          </MenuItem>
          <MenuItem
            key="Contact Support"
            textValue="Contact Support"
            className="p-2"
          >
            <Icon as={MessageCircleIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Contact Support</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem
            key="Download Mobile App"
            textValue="Download Mobile App"
            className="p-2"
          >
            <MenuItemLabel size="sm">Download Mobile App</MenuItemLabel>
          </MenuItem>
          <MenuItem
            key="Install Chrome Extension"
            textValue="Install Chrome Extension"
            className="p-2"
          >
            <MenuItemLabel size="sm">Install Chrome Extension</MenuItemLabel>
          </MenuItem>
        </Menu>
      );
    },
  },
];
