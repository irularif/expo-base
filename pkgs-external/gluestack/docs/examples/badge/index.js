import { BadgeCheckIcon } from "lucide-react-native";
import { VStack } from "@pkgs-ext/gluestack/ui/vstack";
import { Text } from "@pkgs-ext/gluestack/ui/text";
import { HStack } from "@pkgs-ext/gluestack/ui/hstack";
import { Heading } from "@pkgs-ext/gluestack/ui/heading";
import { Button, ButtonText } from "@pkgs-ext/gluestack/ui/button";
import { Box } from "@pkgs-ext/gluestack/ui/box";
import { Badge, BadgeIcon, BadgeText } from "@pkgs-ext/gluestack/ui/badge";
import { Avatar, AvatarFallbackText, AvatarImage } from "@pkgs-ext/gluestack/ui/avatar";
export const examples = [
  {
    name: "Badge with Avatar",
    Code: function Example() { return (<VStack space="2xl"><HStack space="md"><Avatar><AvatarFallbackText>SS</AvatarFallbackText><AvatarImage source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', }} /></Avatar><VStack><HStack><Heading size="sm" >Ronald Richards</Heading><Badge size="sm" variant="solid" action="success" className='ml-1'><BadgeText>Verified</BadgeText><BadgeIcon as={BadgeCheckIcon} className='ml-1'/></Badge></HStack><Text size='sm' >Nursing Assistant</Text></VStack></HStack></VStack>); }
  },
  {
    name: "Badge Composition",
    Code: function Example() { return (<Box className='items-center'><VStack><Badge className='z-10 self-end h-[22px] w-[22px] bg-red-600 rounded-full -mb-3.5 -mr-3.5' variant="solid" ><BadgeText className='text-white'>2</BadgeText></Badge><Button><ButtonText>Notifications</ButtonText></Button></VStack></Box>); }
  }
];