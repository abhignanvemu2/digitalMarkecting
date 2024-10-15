import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Banner from "../assets/banner.png";
import Services from "../Sections/Services";
import About from "../Sections/About";
import Testimonial from "../Sections/Testimonial";
import WhatWeOffer from "../Sections/WhatWeOffer";
import Pricing from "../Sections/Pricing";
import DiscoverMore from "../Sections/DiscoverMore";
function Home() {
  const textItem = (text) => {
    return (
      <Box>
        <Text
          w={"full"}
          whiteSpace="nowrap"
          fontWeight={"semibold"}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} // Responsive font size
        >
          {text}
        </Text>
      </Box>
    );
  };

  return (
    
    <Box>
      {/* Hero Section */}
      <Box h={{ base: "auto", md: "65vh" }} w={"full"} py={{ base: 5, md: 0 }}>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack on small screens, row on larger
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems={"center"}
          h="full"
        >
          {/* Left Section with Text */}
          <Box w={{ base: "100%", md: "50%" }} textAlign={{ base: "center", md: "left" }}>
            <Text
              w={"full"}
              whiteSpace="nowrap"
              color={"primaryColor"}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }} // Responsive font size
            >
              Hello People
            </Text>

            {/* Text Items */}
            {textItem("Boost Your Business")}
            {textItem("Aiming To Fulfill Your")}
            {textItem("Dreams")}

            {/* Action Buttons */}
            <Flex
              direction={{ base: "column", sm: "row" }} // Stack buttons vertically on small screens
              mt={4}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Button
                bg="primaryColor"
                color={"white"}
                mb={{ base: 2, sm: 0 }} // Add margin between buttons on mobile
                mr={{ sm: 2 }}
                _hover={{ bg: "darkPrimaryColor" }}
              >
                Know More
              </Button>
              <Button
                bg="#fff"
                color={"gray.500"}
                border="1px solid black"
              >
                Features
              </Button>
            </Flex>
          </Box>

          {/* Right Section with Image */}
          <Flex justify={{ base: "center", md: "end" }} w={{ base: "100%", md: "50%" }} mt={{ base: 5, md: 0 }}>
            <Image src={Banner} alt="Banner" w={{ base: "80%", md: "35vw" }} />
          </Flex>
        </Flex>
      </Box>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Pricing Section */}
      <Pricing />

      {/* Discover More Section */}
      <DiscoverMore />
    </Box>

  );
}

export default Home;
