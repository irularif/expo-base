import { Command } from 'lucide-react-native';
import {
  Icon,
  EditIcon,
  VStack,
  Tooltip,
  TooltipContent,
  Text,
  HStack,
  Heading,
  Center,
  Box,
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
} from '@pkgs/ui';
export const examples = [
  {
    name: 'Tooltip with Heading',
    Code: function App() {
      return (
        <Box className="justify-center h-96">
          <AvatarGroup className="flex-row">
            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Avatar
                    size="lg"
                    {...triggerProps}
                    className="border-outline-0 border-2 bg-primary-600"
                  >
                    <AvatarFallbackText>+ 3</AvatarFallbackText>
                  </Avatar>
                );
              }}
            >
              <TooltipContent className="p-4 rounded-md max-w-72 bg-background-50">
                <VStack space="md" className="rounded-lg">
                  <Heading size="sm">View all members of this channel</Heading>
                  <Center>
                    <Text className="font-sm">
                      Includes John, Sarah, Mike, Emily
                    </Text>
                    <Text className="font-sm">and David</Text>
                  </Center>
                </VStack>
              </TooltipContent>
            </Tooltip>
            <Avatar
              size="lg"
              className="border-outline-0 border-2 bg-emerald-600"
            >
              <AvatarFallbackText className="text-white">
                Sandeep Srivastva
              </AvatarFallbackText>
            </Avatar>
            <Avatar size="lg" className="border-outline-0 border-2 bg-cyan-600">
              <AvatarFallbackText className="text-white">
                Arjun Kapoor
              </AvatarFallbackText>
            </Avatar>
            <Avatar
              size="lg"
              className="border-outline-0 border-2 bg-indigo-600"
            >
              <AvatarFallbackText className="text-white">
                Ritik Sharma
              </AvatarFallbackText>
            </Avatar>
          </AvatarGroup>
        </Box>
      );
    },
  },
  {
    name: 'Tooltip with Icon',
    Code: function App() {
      return (
        <Box className="h-96 justify-center">
          <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Avatar size="md" {...triggerProps} className="bg-primary-600">
                  <Icon as={EditIcon} size="sm" className="text-white" />
                </Avatar>
              );
            }}
          >
            <TooltipContent className="bg-background-50 rounded-md">
              <Box className="p-2.5">
                <Text size="sm">New message</Text>
                <HStack space="xs" className="p-1 ml-3">
                  <Avatar size="xs" className="bg-gray-500 rounded">
                    <Icon as={Command} className="text-typography-0" />
                  </Avatar>
                  <Avatar size="xs" className="bg-gray-500 rounded">
                    <AvatarFallbackText>N</AvatarFallbackText>
                  </Avatar>
                </HStack>
              </Box>
            </TooltipContent>
          </Tooltip>
        </Box>
      );
    },
  },
];
