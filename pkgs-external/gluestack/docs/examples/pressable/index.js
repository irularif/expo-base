import { Text } from "@pkgs-ext/gluestack/ui/text";
import { Pressable } from "@pkgs-ext/gluestack/ui/pressable";
export const examples = [
  {
    name: "Pressable child elements according to its states",
    Code: function Example() { return (<Pressable className="p-16 bg-primary-500">{({ pressed }) =>(<Text className={pressed ? 'text-pink-400' : 'text-amber-400'}>PRESSABLE</Text>)}</Pressable>); }
  }
];