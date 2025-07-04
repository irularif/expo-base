import { Text, Grid, GridItem } from '@pkgs/ui';
export const examples = [
  {
    name: 'Setting the gap between grid items',
    Code: function Example() {
      return (
        <Grid className="gap-4" _extra={{ className: 'grid-cols-9' }}>
          <GridItem
            className="bg-background-50 p-3 rounded-md text-center"
            _extra={{ className: 'col-span-3' }}
          >
            <Text>A</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-3 rounded-md text-center"
            _extra={{ className: 'col-span-3' }}
          >
            <Text>B</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-3 rounded-md text-center"
            _extra={{ className: 'col-span-3' }}
          >
            <Text>C</Text>
          </GridItem>
        </Grid>
      );
    },
  },
  {
    name: 'Changing row and column gaps independently',
    Code: function Example() {
      return (
        <Grid className="gap-y-2 gap-x-4" _extra={{ className: 'grid-cols-6' }}>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-2' }}
          >
            <Text className="text-sm">01</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-2' }}
          >
            <Text className="text-sm">02</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-2' }}
          >
            <Text className="text-sm">03</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-2' }}
          >
            <Text className="text-sm">04</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-2' }}
          >
            <Text className="text-sm">05</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-2' }}
          >
            <Text className="text-sm">06</Text>
          </GridItem>
        </Grid>
      );
    },
  },
  {
    name: 'Nested Grids',
    Code: function Example() {
      return (
        <Grid className="gap-3" _extra={{ className: 'grid-cols-8' }}>
          <GridItem
            className="bg-background-50 p-3 rounded-md text-center"
            _extra={{ className: 'col-span-4' }}
          >
            <Text className="text-sm">01</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-3 rounded-md text-center"
            _extra={{ className: 'col-span-4' }}
          >
            <Text className="text-sm">02</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-3 rounded-md text-center"
            _extra={{ className: 'col-span-4' }}
          >
            <Grid className="gap-5" _extra={{ className: 'grid-cols-2' }}>
              <GridItem
                className="bg-background-200 p-2 rounded-md"
                _extra={{ className: 'col-span-1' }}
              >
                <Text className="text-sm">1</Text>
              </GridItem>
              <GridItem
                className="bg-background-200 p-2 rounded-md"
                _extra={{ className: 'col-span-1' }}
              >
                <Text className="text-sm">2</Text>
              </GridItem>
              <GridItem
                className="bg-background-200 p-2 rounded-md"
                _extra={{ className: 'col-span-1' }}
              >
                <Text className="text-sm">3</Text>
              </GridItem>
              <GridItem
                className="bg-background-200 p-2 rounded-md"
                _extra={{ className: 'col-span-1' }}
              >
                <Text className="text-sm">4</Text>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            className="bg-background-50 p-3 rounded-md text-center"
            _extra={{ className: 'col-span-4' }}
          >
            <Grid className="gap-5" _extra={{ className: 'grid-cols-4' }}>
              <GridItem
                className="bg-background-200 p-2 rounded-md"
                _extra={{ className: 'col-span-4' }}
              >
                <Text className="text-sm">1</Text>
              </GridItem>
              <GridItem
                className="bg-background-200 p-2 rounded-md"
                _extra={{ className: 'col-span-4' }}
              >
                <Text className="text-sm">2</Text>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      );
    },
  },
  {
    name: 'Responsive Grids',
    Code: function Example() {
      return (
        <Grid className="gap-y-2 gap-x-4" _extra={{ className: 'grid-cols-6' }}>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-6 md:col-span-3 lg:col-span-2' }}
          >
            <Text className="text-sm">01</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-6 md:col-span-3 lg:col-span-2' }}
          >
            <Text className="text-sm">02</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-6 md:col-span-3 lg:col-span-2' }}
          >
            <Text className="text-sm">03</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-6 md:col-span-3 lg:col-span-2' }}
          >
            <Text className="text-sm">04</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-6 md:col-span-3 lg:col-span-2' }}
          >
            <Text className="text-sm">05</Text>
          </GridItem>
          <GridItem
            className="bg-background-50 p-4 rounded-md text-center"
            _extra={{ className: 'col-span-6 md:col-span-3 lg:col-span-2' }}
          >
            <Text className="text-sm">06</Text>
          </GridItem>
        </Grid>
      );
    },
  },
];
