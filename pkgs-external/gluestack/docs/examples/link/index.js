import { ArrowUpRight } from "lucide-react-native";
import { Icon } from "@pkgs-ext/gluestack/ui/icon";
import { Text } from "@pkgs-ext/gluestack/ui/text";
import { Link, LinkText } from "@pkgs-ext/gluestack/ui/link";
import { HStack } from "@pkgs-ext/gluestack/ui/hstack";
export const examples = [
  {
    name: "Default",
    Code: function Example() { return (<HStack><Text size="lg" >Design inspiration from&nbsp;</Text><Link href="https://gluestack.io/" isExternal><LinkText size="lg">pinterest.com</LinkText></Link></HStack>); }
  },
  {
    name: "Link with icon",
    Code: function Example() { return (<HStack><Text size="lg">Go to&nbsp;</Text><Link href="https://gluestack.io/" isExternal><HStack><LinkText size="lg">Pinterest</LinkText><Icon as={ArrowUpRight} size="lg" className='mt-0.5 text-info-600'/></HStack></Link></HStack>); }
  },
  {
    name: "Basic Unitools Link",
    Code: function Example() { return (<Link href="https://gluestack.io/"><Text>gluestack</Text></Link>); }
  }
];