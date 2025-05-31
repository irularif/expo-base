import { HStack } from "@pkgs-ext/gluestack/ui/hstack";
import { Box } from "@pkgs-ext/gluestack/ui/box";
export const examples = [
  {
    name: "HStack Reversed",
    Code: function Example() { return (<HStack space="md" reversed><Box className="w-20 h-20 bg-primary-300"/><Box className="w-20 h-20 bg-primary-400"/><Box className="w-20 h-20 bg-primary-500"/></HStack>); }
  }
];