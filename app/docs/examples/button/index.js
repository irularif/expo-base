import colors from "tailwindcss/colors";
import { AddIcon, ArrowUpIcon, ArrowLeftIcon, EditIcon, InfoIcon } from "@pkgs/components/icon";
import { VStack } from "@pkgs/components/vstack";
import { Text } from "@pkgs/components/text";
import { Input, InputField } from "@pkgs/components/input";
import { Heading } from "@pkgs/components/heading";
import { Center } from "@pkgs/components/center";
import { Button, ButtonText, ButtonSpinner, ButtonIcon } from "@pkgs/components/button";
import { Box } from "@pkgs/components/box";
export const examples = [
  {
    name: "Button with Loading State",
    Code: function ButtonDemo(){ return (<Button className='p-3'><ButtonSpinner color={colors.gray[400]} /><ButtonText className='font-medium text-sm ml-2'>Please wait...</ButtonText></Button>); }
  },
  {
    name: "Icon Button",
    Code: function ButtonDemo(){ return (<Button size='lg' className='rounded-full p-3.5' ><ButtonIcon as={EditIcon} /></Button>); }
  },
  {
    name: "Link Button",
    Code: function ButtonDemo(){ return (<Button variant='link'><ButtonText className='font-medium text-sm text-typography-900' >Back to top</ButtonText><ButtonIcon as={ArrowUpIcon} className='h-3 w-3 text-background-900 ml-1' /></Button>); }
  },
  {
    name: "Button With Icon",
    Code: function ButtonDemo(){ return (<Box><Button><ButtonIcon as={InfoIcon} className='mr-2'/><ButtonText>Left Icon</ButtonText></Button><Button variant='solid' className='mt-2'><ButtonText>Right Icon</ButtonText><ButtonIcon as={AddIcon} className='ml-2'/></Button></Box>); }
  },
  {
    name: "Button with Full Width",
    Code: function ButtonDemo(){ return (<Center><Box className='p-5 max-w-96 border border-background-300 rounded-lg'><VStack className='pb-4' space='xs'><Heading className='leading-[30px]'>Set new password</Heading><Text className='text-sm'>Almost done. Enter your new password and you are all set.</Text></VStack><VStack space='xl' className='py-2'><Input><InputField className='py-2' placeholder='New password' /></Input><Input><InputField className='py-2' placeholder='Confirm new password' /></Input></VStack><VStack space='lg' className='pt-4'><Button size='sm' ><ButtonText>Submit</ButtonText></Button><Box className='flex flex-row'><Button variant='link' size='sm' className='p-0'><ButtonIcon className='mr-1' size='md' as={ArrowLeftIcon} /><ButtonText >Back to login</ButtonText></Button></Box></VStack></Box></Center>); }
  }
];