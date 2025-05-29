import { VStack } from "@pkgs/components/ui/vstack";
import { Box } from "@pkgs/components/ui/box";
export const examples = [
  {
    name: "VStack Reversed",
    Code: function Example() { return (<VStack space='md'><Box className='w-20 h-20 bg-primary-300' /><Box className='w-20 h-20 bg-primary-400' /><Box className='w-20 h-20 bg-primary-500' /></VStack>); }
  }
];