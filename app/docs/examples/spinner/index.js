import colors from 'tailwindcss/colors';
import { VStack, Text, Spinner, HStack } from '@pkgs/ui';
export const examples = [
  {
    name: 'Spinner with Label',
    Code: function Example() {
      return (
        <HStack space="sm">
          <Spinner />
          <Text size="md">Please Wait</Text>
        </HStack>
      );
    },
  },
  {
    name: 'Color Scheme',
    Code: function Example() {
      return (
        <VStack space="md">
          <Spinner color={colors.indigo[600]} />
          <Spinner color={colors.emerald[600]} />
          <Spinner color={colors.amber[600]} />
          <Spinner color={colors.fuchsia[600]} />
        </VStack>
      );
    },
  },
];
