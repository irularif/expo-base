import { User, Home, ShoppingCart, Wallet, LogOut } from 'lucide-react-native';
import React from 'react';
import {
  Icon,
  CheckIcon,
  CircleIcon,
  PhoneIcon,
  StarIcon,
  VStack,
  Text,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Pressable,
  HStack,
  Heading,
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Divider,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
  Button,
  ButtonText,
  ButtonIcon,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@pkgs/ui';

export const examples = [
  {
    name: 'Filter',
    Code: function App() {
      const [showDrawer, setShowDrawer] = React.useState(false);
      const [categories, setCategories] = React.useState([]);
      const [brands, setBrands] = React.useState([]);
      const [colors, setColors] = React.useState([]);
      return (
        <>
          <Button
            onPress={() => {
              setShowDrawer(true);
            }}
          >
            <ButtonText>Show Drawer</ButtonText>
          </Button>
          <Drawer
            isOpen={showDrawer}
            onClose={() => {
              setShowDrawer(false);
            }}
          >
            <DrawerBackdrop />
            <DrawerContent className="px-4 py-3 w-[270px] md:w-[300px]">
              <DrawerHeader>
                <Heading size="md">FILTERS</Heading>
                <Button
                  variant="link"
                  size="xs"
                  onPress={() => {
                    setCategories([]);
                    setBrands([]);
                    setColors([]);
                  }}
                >
                  <ButtonText>Clear All</ButtonText>
                </Button>
              </DrawerHeader>
              <DrawerBody className="gap-4 mt-0 mb-0">
                <VStack className="pl-2 py-3">
                  <Text className="font-semibold" size="sm">
                    Categories
                  </Text>
                  <Divider className="my-1" />
                  <CheckboxGroup
                    value={categories}
                    onChange={(keys) => {
                      setCategories(keys);
                    }}
                  >
                    <VStack className="gap-3 mt-3 ml-1">
                      <HStack className="items-center gap-1">
                        <Checkbox value="tops" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Tops</CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (143,234)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="bottoms" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Bottoms</CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (5,431,234)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="shoes" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Shoes</CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (98,234)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="accessories" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Accessories</CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (91,234)
                        </Text>
                      </HStack>
                    </VStack>
                  </CheckboxGroup>
                </VStack>
                <VStack className="pl-2 py-3">
                  <Text className="font-semibold">Brands</Text>
                  <Divider className="my-1" />
                  <CheckboxGroup
                    value={brands}
                    onChange={(keys) => {
                      setBrands(keys);
                    }}
                  >
                    <VStack className="gap-3 mt-3 ml-1">
                      <HStack className="items-center gap-1">
                        <Checkbox value="tops" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Allen Solly</CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (1,234)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="bottoms" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Adidas</CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (524)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="shoes" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Nike</CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (931)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="accessories" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Marks & Spencer</CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (1,241)
                        </Text>
                      </HStack>
                    </VStack>
                  </CheckboxGroup>
                </VStack>
                <VStack className="pl-2 py-3">
                  <Text className="font-semibold">Price Range</Text>
                  <Divider className="my-1" />
                  <VStack className="pt-6 pr-4 ml-1">
                    <Slider
                      defaultValue={2000}
                      size="sm"
                      orientation="horizontal"
                      minValue={0}
                      maxValue={10000}
                    >
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </VStack>
                  <HStack className="justify-between pt-2">
                    <Text size="sm">0</Text>
                    <Text size="sm">10,000</Text>
                  </HStack>
                </VStack>
                <VStack className="pl-2 py-3">
                  <Text className="font-semibold">Colour</Text>
                  <Divider className="my-1" />
                  <CheckboxGroup
                    value={colors}
                    onChange={(keys) => {
                      setColors(keys);
                    }}
                  >
                    <VStack className="gap-3 mt-3 ml-1">
                      <HStack className="items-center gap-1">
                        <Checkbox value="tops" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel className="flex flex-row items-center">
                            <Icon
                              as={CircleIcon}
                              className="fill-gray-200 text-gray-200 mr-1"
                            />
                            White
                          </CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (23,673)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="bottoms" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel className="flex flex-row items-center">
                            <Icon
                              as={CircleIcon}
                              className="fill-black text-black mr-1"
                            />
                            Black
                          </CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (54,657)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="shoes" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel className="flex flex-row items-center">
                            <Icon
                              as={CircleIcon}
                              className="fill-red-500 text-red-500 mr-1"
                            />
                            Red
                          </CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (45,678)
                        </Text>
                      </HStack>
                      <HStack className="items-center gap-1">
                        <Checkbox value="accessories" size="sm">
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel className="flex flex-row items-center">
                            <Icon
                              as={CircleIcon}
                              className="fill-amber-900 text-amber-900 mr-1"
                            />
                            Brown
                          </CheckboxLabel>
                        </Checkbox>
                        <Text className="text-typography-500" size="xs">
                          (13,672)
                        </Text>
                      </HStack>
                    </VStack>
                  </CheckboxGroup>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      );
    },
  },

  {
    name: 'Sidebar Menu',
    Code: function App() {
      const [showDrawer, setShowDrawer] = React.useState(false);
      return (
        <>
          <Button
            onPress={() => {
              setShowDrawer(true);
            }}
          >
            <ButtonText>Show Drawer</ButtonText>
          </Button>
          <Drawer
            isOpen={showDrawer}
            onClose={() => {
              setShowDrawer(false);
            }}
          >
            <DrawerBackdrop />
            <DrawerContent className="w-[270px] md:w-[300px]">
              <DrawerHeader className="justify-center flex-col gap-2">
                <Avatar size="2xl">
                  <AvatarFallbackText>User Image</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    }}
                  />
                </Avatar>
                <VStack className="justify-center items-center">
                  <Text size="lg">User Name</Text>
                  <Text size="sm" className="text-typography-600">
                    abc@gmail.com
                  </Text>
                </VStack>
              </DrawerHeader>
              <Divider className="my-4" />
              <DrawerBody contentContainerClassName="gap-2">
                <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                  <Icon as={User} size="lg" className="text-typography-600" />
                  <Text>My Profile</Text>
                </Pressable>
                <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                  <Icon as={Home} size="lg" className="text-typography-600" />
                  <Text>Saved Address</Text>
                </Pressable>
                <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                  <Icon
                    as={ShoppingCart}
                    size="lg"
                    className="text-typography-600"
                  />
                  <Text>Orders</Text>
                </Pressable>
                <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                  <Icon as={Wallet} size="lg" className="text-typography-600" />
                  <Text>Saved Cards</Text>
                </Pressable>
                <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                  <Icon
                    as={StarIcon}
                    size="lg"
                    className="text-typography-600"
                  />
                  <Text>Review App</Text>
                </Pressable>
                <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                  <Icon
                    as={PhoneIcon}
                    size="lg"
                    className="text-typography-600"
                  />
                  <Text>Contact Us</Text>
                </Pressable>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  className="w-full gap-2"
                  variant="outline"
                  action="secondary"
                >
                  <ButtonText>Logout</ButtonText>
                  <ButtonIcon as={LogOut} />
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      );
    },
  },
];
