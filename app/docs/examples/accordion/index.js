import { MinusIcon, PlusIcon } from 'lucide-react-native';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  ChevronDownIcon,
  ChevronUpIcon,
  Divider,
} from '@pkgs/ui';

export const examples = [
  {
    name: 'Customized Component',
    Code: function App() {
      return (
        <Accordion
          className="w-[90%] m-5 border border-outline-300"
          type="multiple"
        >
          <AccordionItem value="a" className="border-b border-outline-300">
            <AccordionHeader className="bg-background-0">
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        What does the "type" prop of the Accordion component do?
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={ChevronUpIcon} />
                      ) : (
                        <AccordionIcon as={ChevronDownIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="mt-0 pt-2 bg-background-50">
              <AccordionContentText>
                The type prop determines whether one or multiple items can be
                opened at the same time. The default value is "single" which
                means only one item can be opened at a time.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b" className="border-b border-outline-300">
            <AccordionHeader
              sx={{
                backgroundColor: '$backgroundLight0',
                _dark: { backgroundColor: '$backgroundDark950' },
              }}
            >
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        Can I disable the whole accordion?
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={ChevronUpIcon} />
                      ) : (
                        <AccordionIcon as={ChevronDownIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="mt-0 pt-2 bg-background-50">
              <AccordionContentText>
                Yes, you can disable the whole accordion by setting the
                isDisabled prop to true on the Accordion component.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="c">
            <AccordionHeader className="bg-background-0">
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        What is a controlled accordion? How can I make it
                        controlled?
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={ChevronUpIcon} />
                      ) : (
                        <AccordionIcon as={ChevronDownIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="mt-0 pt-2 bg-background-50">
              <AccordionContentText>
                Controlled components refer to the components where the state
                and behaviors are controlled by the Parent component. You can
                make the accordion a controlled component by passing the value
                prop to the Accordion component and setting the onValueChange
                prop to update the value prop. Refer to the controlled accordion
                example in the docs.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    },
  },
  {
    name: 'Rounded corners',
    Code: function App() {
      return (
        <Accordion className="m-5 w-[80%] max-w-[640px] bg-transparent">
          <AccordionItem value="item-1" className="rounded-lg">
            <AccordionHeader>
              <AccordionTrigger className="focus:web:rounded-lg">
                {({ isExpanded }) => {
                  return (
                    <>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} className="mr-3" />
                      ) : (
                        <AccordionIcon as={PlusIcon} className="mr-3" />
                      )}
                      <AccordionTitleText>
                        How do I place an order?
                      </AccordionTitleText>
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="ml-9">
              <AccordionContentText>
                To place an order, simply select the products you want, proceed
                to checkout, provide shipping and payment information, and
                finalize your purchase.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mt-5 rounded-lg">
            <AccordionHeader>
              <AccordionTrigger className="focus:web:rounded-lg">
                {({ isExpanded }) => {
                  return (
                    <>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} className="mr-3" />
                      ) : (
                        <AccordionIcon as={PlusIcon} className="mr-3" />
                      )}
                      <AccordionTitleText>
                        What payment methods do you accept?
                      </AccordionTitleText>
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="ml-9">
              <AccordionContentText>
                We accept all major credit cards, including Visa, Mastercard,
                and American Express. We also support payments through PayPal.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    },
  },
  {
    name: 'Disabled item',
    Code: function App() {
      return (
        <Accordion variant="unfilled" className="m-5 w-[90%]">
          <AccordionItem
            value="item-1"
            isDisabled={true}
            className="border-b border-outline-300"
          >
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>Disabled Item</AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                This is a Disabled Item.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        Is this accordion accessible?
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                Yes, the accordion is accessible. It adheres to the WAI-ARIA
                design pattern. You can read more about it in the accessibility
                section of the docs.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    },
  },
  {
    name: 'Default value',
    Code: function App() {
      return (
        <Accordion
          variant="unfilled"
          type="single"
          defaultValue="item-3"
          className="w-[90%] m-5"
        >
          <AccordionItem value="item-1" className="rounded-lg">
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        What is the defaultValue prop of the Accordion
                        component?
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                The defaultValue prop of the Accordion component is used to
                define the open item by default. It is used when the Accordion
                component is uncontrolled.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <Divider />
          <AccordionItem value="item-2" className="rounded-lg">
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        How many size variants does the Accordion component
                        have?
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                The Accordion component has three size variants - sm, md and lg.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <Divider />
          <AccordionItem value="item-3" className="rounded-lg">
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        Can I nest my accordions?
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                Yes, you can nest your accordions. Refer to the nested accordion
                example in the docs.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    },
  },
  {
    name: 'Nested Components',
    Code: function App() {
      return (
        <Accordion
          variant="unfilled"
          size="sm"
          className="m-5 border border-outline-300 w-[80%] max-w-[640px]"
        >
          <AccordionItem value="a">
            <AccordionHeader className="bg-background-0">
              <AccordionTrigger>
                {({ isExpanded }) => (
                  <>
                    {isExpanded ? (
                      <AccordionIcon as={MinusIcon} size="sm" />
                    ) : (
                      <AccordionIcon as={PlusIcon} size="sm" />
                    )}
                    <AccordionTitleText className="ml-3 text-sm">
                      USA
                    </AccordionTitleText>
                  </>
                )}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="pb-0">
              <Accordion className="w-full border border-outline-300">
                <AccordionItem value="b">
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }) => (
                        <>
                          {isExpanded ? (
                            <AccordionIcon as={MinusIcon} />
                          ) : (
                            <AccordionIcon as={PlusIcon} />
                          )}
                          <AccordionTitleText className="ml-3">
                            California
                          </AccordionTitleText>
                        </>
                      )}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionContentText>
                      Capital city of California is Sacramento. California has a
                      GDP of 2.89 trillion dollars and follows Pacific Standard
                      Time zone.
                    </AccordionContentText>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion className="w-full mt-5 bg-background-0">
                <AccordionItem value="c">
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }) => (
                        <>
                          {isExpanded ? (
                            <AccordionIcon as={MinusIcon} />
                          ) : (
                            <AccordionIcon as={PlusIcon} />
                          )}
                          <AccordionTitleText className="ml-3">
                            Nevada
                          </AccordionTitleText>
                        </>
                      )}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionContentText>
                      Nevada is located in a mountainous region that includes
                      vast semiarid grasslands and sandy alkali deserts. It is
                      the most arid state of the country.
                    </AccordionContentText>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    },
  },
  {
    name: 'Controlled Accordion',
    Code: function App() {
      const [selectedValues, setSelectedValues] = React.useState([
        'item-1',
        'item-2',
      ]);
      return (
        <Accordion
          variant="unfilled"
          type="multiple"
          value={selectedValues}
          onValueChange={(item) => setSelectedValues(item)}
          className="m-5 w-[95%]"
        >
          <AccordionItem
            value="item-1"
            className="border-t border-b border-outline-300"
          >
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        Exploring Nature's Wonders
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                Embark on a journey through the breathtaking landscapes and
                diverse ecosystems of our planet. From majestic mountains to
                serene oceans, discover the beauty that nature has to offer.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        The Art of Culinary Delights
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                Indulge your senses in a culinary adventure. Uncover the secrets
                behind delectable dishes, learn about unique flavor profiles,
                and ignite your passion for cooking.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-t border-b border-outline-300"
          >
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        Mastering the Creative Process
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText>
                Immerse yourself in the world of creativity. Unleash your
                artistic potential, whether it's through writing, painting, or
                any other form of expression.
              </AccordionContentText>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    },
  },
];
