import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Banner from "../assets/WhatWeOffer.png";

function WhatWeOffer() {
  const textItem = (text) => {
    return (
      <Box>
        <Text
          w={"full"}
          whiteSpace="nowrap"
          lineHeight={"45px"}
          fontWeight={"semibold"}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} // Responsive font size
        >
          {text}
        </Text>
      </Box>
    );
  };

  return (
    <section id="about" className="py-5">
      <Box h={{ base: "auto", md: "65vh" }} w={"full"} py={5}>
        <Flex
          direction={{ base: "column", md: "row" }} // Column layout for mobile, row for larger screens
          justifyContent={"space-between"}
          alignItems={"center"}
          h="full"
        >
          {/* Image Section */}
          <Flex w={{ base: "100%", md: "40%" }} justify={"center"} mb={{ base: 6, md: 0 }}>
            <Image src={Banner} alt="Banner" w={{ base: "80%", md: "100%" }} />
          </Flex>

          {/* Text Section */}
          <Box w={{ base: "100%", md: "60%" }} pl={{ base: 0, md: 12 }} textAlign={{ base: "center", md: "left" }}>
            <Text
              w={"full"}
              whiteSpace="nowrap"
              color={"primaryColor"}
              fontSize={{ base: "md", sm: "lg", md: "xl" }} // Responsive text size
            >
              WHAT WE OFFER
            </Text>

            {/* Main Text */}
            <Box py={4}>
              {textItem("Because we work with")}
              {textItem("proven strategy")}
            </Box>

            {/* Description */}
            <Flex direction="column" align="flex-start" w="full">
              <Text mb={2} fontSize={{ base: "sm", md: "md" }} textAlign={{ base: "center", md: "left" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Text>

              {/* Button */}
              <Box py={4}>
                <Button
                  bg="primaryColor"
                  color="white"
                  _hover={{ bg: "darkPrimaryColor" }}
                  w={{ base: "100%", md: "auto" }} // Full width on mobile, auto on larger screens
                >
                  Explore
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </section>
  );
}

export default WhatWeOffer;
