import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableData,
  TableCaption,
  Box,
  Badge,
  BadgeText,
} from '@pkgs/ui';

export const examples = [
  {
    name: 'Table with caption',
    Code: function App() {
      return (
        <Box className="rounded-lg overflow-hidden w-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>Phone Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableData>Rajesh Kumar</TableData>
                <TableData fontWeight="$normal">rajesh@example.com</TableData>
                <TableData fontWeight="$normal">1234567890</TableData>
              </TableRow>
              <TableRow>
                <TableData>Priya Sharma</TableData>
                <TableData fontWeight="$normal">priya@example.com</TableData>
                <TableData fontWeight="$normal">1234567890</TableData>
              </TableRow>
              <TableRow>
                <TableData>Ravi Patel</TableData>
                <TableData fontWeight="$normal">ravi@example.com</TableData>
                <TableData fontWeight="$normal">1234567890</TableData>
              </TableRow>
              <TableRow>
                <TableData>Ananya Gupta</TableData>
                <TableData fontWeight="$normal">ananya@example.com</TableData>
                <TableData fontWeight="$normal">1234567890</TableData>
              </TableRow>
              <TableRow>
                <TableData>Arjun Singh</TableData>
                <TableData fontWeight="$normal">arjun@example.com</TableData>
                <TableData fontWeight="$normal">1234567890</TableData>
              </TableRow>
              <TableRow>
                <TableData>Nisha Verma</TableData>
                <TableData fontWeight="$normal">nisha@example.com</TableData>
                <TableData fontWeight="$normal">1234567890</TableData>
              </TableRow>
            </TableBody>
            <TableCaption fontWeight="$normal">
              Showing recent membership details
            </TableCaption>
          </Table>
        </Box>
      );
    },
  },
  {
    name: 'Stripped table',
    Code: function App() {
      return (
        <Box className="p-3 bg-background-0 rounded-lg overflow-hidden">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-b-0 bg-background-0 hover:bg-background-0">
                <TableHead className="font-bold">Order id</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Order price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b-0 bg-background-50">
                <TableData>5771</TableData>
                <TableData>3</TableData>
                <TableData>Rajesh Kumar</TableData>
                <TableData>New Jersey</TableData>
                <TableData>$ 200</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="success"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Completed</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow className="border-b-0 hover:bg-background-0">
                <TableData>5231</TableData>
                <TableData>2</TableData>
                <TableData>Priya Sharma</TableData>
                <TableData>Austin</TableData>
                <TableData>$ 150</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="info"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow className="border-b-0 bg-background-50">
                <TableData>5771</TableData>
                <TableData>3</TableData>
                <TableData>Ravi Patel</TableData>
                <TableData>Seattle</TableData>
                <TableData>$ 215</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="warning"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Shipped</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow className="border-b-0 hover:bg-background-0">
                <TableData>5231</TableData>
                <TableData>4</TableData>
                <TableData>Ananya Gupta</TableData>
                <TableData>California</TableData>
                <TableData>$ 88</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="info"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow className="border-b-0 bg-background-50">
                <TableData>5771</TableData>
                <TableData>3</TableData>
                <TableData>Arjun Singh</TableData>
                <TableData>Seattle</TableData>
                <TableData>$ 115</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="success"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Completed</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow className="border-b-0 bg-background-0 hover:bg-background-0">
                <TableData>5771</TableData>
                <TableData>3</TableData>
                <TableData>Nisha Verma</TableData>
                <TableData>Seattle</TableData>
                <TableData>$ 115</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="info"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      );
    },
  },
  {
    name: 'Table with other components',
    Code: function App() {
      return (
        <Box className="rounded-lg overflow-hidden">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Order id</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Order price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableData>571</TableData>
                <TableData>3</TableData>
                <TableData>Rajesh Kumar</TableData>
                <TableData>New Jersey</TableData>
                <TableData>$ 200</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="success"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Completed</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>5231</TableData>
                <TableData>2</TableData>
                <TableData>Priya Sharma</TableData>
                <TableData>Austin</TableData>
                <TableData>$ 150</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="info"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>5771</TableData>
                <TableData>3</TableData>
                <TableData>Ravi Patel</TableData>
                <TableData>Seattle</TableData>
                <TableData>$ 215</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="warning"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Shipped</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>5231</TableData>
                <TableData>4</TableData>
                <TableData>Ananya Gupta</TableData>
                <TableData>California</TableData>
                <TableData>$ 88</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="info"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>5771</TableData>
                <TableData>3</TableData>
                <TableData>Arjun Singh</TableData>
                <TableData>Seattle</TableData>
                <TableData>$ 115</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="info"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>5771</TableData>
                <TableData>3</TableData>
                <TableData>Nisha Verma</TableData>
                <TableData>Austin</TableData>
                <TableData>$ 115</TableData>
                <TableData>
                  <Badge
                    size="sm"
                    action="success"
                    className="w-fit justify-center"
                  >
                    <BadgeText>Completed</BadgeText>
                  </Badge>
                </TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      );
    },
  },
  {
    name: 'Table with top and side header',
    Code: function App() {
      return (
        <Box className="border border-solid border-outline-200 rounded-lg overflow-hidden w-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-background-50">
                <TableHead className="border-0 border-r border-solid border-outline-200">
                  Player
                </TableHead>
                <TableHead>Pts</TableHead>
                <TableHead>Reb</TableHead>
                <TableHead>Ast</TableHead>
                <TableHead>Stl</TableHead>
                <TableHead>Blk</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead className="bg-background-50 border-0 border-solid border-r border-outline-200 font-medium">
                  LeBron James
                </TableHead>
                <TableData>30</TableData>
                <TableData>10</TableData>
                <TableData>5</TableData>
                <TableData>5</TableData>
                <TableData>2</TableData>
              </TableRow>
              <TableRow>
                <TableHead className="bg-background-50 border-0 border-solid border-r border-outline-200 font-medium">
                  Anthony Davis
                </TableHead>
                <TableData>21</TableData>
                <TableData>15</TableData>
                <TableData>10</TableData>
                <TableData>3</TableData>
                <TableData>6</TableData>
              </TableRow>
              <TableRow>
                <TableHead className="bg-background-50 border-0 border-solid border-r border-outline-200 font-medium">
                  Austin Reaves
                </TableHead>
                <TableData>18</TableData>
                <TableData>8</TableData>
                <TableData>15</TableData>
                <TableData>3</TableData>
                <TableData>3</TableData>
              </TableRow>
              <TableRow className="border-b-0">
                <TableHead className="bg-background-50 border-0 border-solid border-r border-outline-200 font-medium">
                  Kobe Bryant
                </TableHead>
                <TableData>32</TableData>
                <TableData>12</TableData>
                <TableData>13</TableData>
                <TableData>4</TableData>
                <TableData>5</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      );
    },
  },
];
