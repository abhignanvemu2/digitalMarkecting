import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

function DiscoverMore() {
  return (
    <Box py={{ base: "50px", md: "100px" }} px={{ base: "4", md: "0" }}>
      {/* Discover More Heading */}
      <Flex justifyContent="center">
        <Box>
          <Box>
            <Text color="primaryColor" textAlign={"center"}>
              DISCOVER MORE
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "xl", md: "3xl" }}
              fontWeight={"bold"}
              pt={2}
              textAlign={"center"}
            >
              Subscribe Our Newsletter
            </Text>
          </Box>
        </Box>
      </Flex>

      {/* Description Text */}
      <Box>
        <Box py={6}>
          <Text textAlign={"center"} fontSize={{ base: "xs", md: "sm" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore.
          </Text>
        </Box>

        {/* Input Field and Subscribe Button */}
        <Flex justifyContent={"center"} py={4}>
          <Flex
            w={{ base: "full", sm: "80%", md: "60%", lg: "40%" }}
            direction={{ base: "column", md: "row" }}
          >
            <Input
              borderRadius={"0px"}
              placeholder="Enter Your Email"
              mb={{ base: 4, md: 0 }} // Margin for spacing on small screens
            />
            <Button
              borderRadius={"0px"}
              color={"white"}
              bg={"primaryColor"}
              _hover={{ bg: "darkPrimaryColor" }}
              w={{ base: "full", md: "auto" }} // Full width on mobile, auto on larger
            >
              Subscribe
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default DiscoverMore;
