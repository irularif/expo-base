import React from 'react';
import {
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
  VStack,
  Text,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Heading,
  FormControl,
  Button,
  ButtonText,
} from '@pkgs/ui';
export const examples = [
  {
    name: 'Input type password with FormControl',
    Code: function App() {
      const [showPassword, setShowPassword] = React.useState(false);
      const handleState = () => {
        setShowPassword((showState) => {
          return !showState;
        });
      };
      return (
        <FormControl className="p-4 border rounded-lg border-outline-300">
          <VStack space="xl">
            <Heading className="text-typography-900">Login</Heading>
            <VStack space="xs">
              <Text className="text-typography-500">Email</Text>
              <Input className="min-w-[250px]">
                <InputField type="text" />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text className="text-typography-500">Password</Text>
              <Input className="text-center">
                <InputField type={showPassword ? 'text' : 'password'} />
                <InputSlot className="pr-3" onPress={handleState}>
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            </VStack>
            <Button className="ml-auto">
              <ButtonText className="text-typography-0">Save</ButtonText>
            </Button>
          </VStack>
        </FormControl>
      );
    },
  },
  {
    name: 'Input with Icons',
    Code: function Example() {
      return (
        <Input>
          <InputSlot className="pl-3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField placeholder="Search..." />
        </Input>
      );
    },
  },
];
