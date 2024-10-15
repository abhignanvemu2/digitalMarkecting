import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Banner from "../assets/Testimonial.png";

function Testimonial() {
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
          direction={{ base: "column", md: "row" }} // Column layout on small screens, row on larger ones
          justifyContent={"space-between"}
          alignItems={"center"}
          h="full"
        >
          {/* Text Section */}
          <Box w={{ base: "100%", md: "60%" }} pl={{ base: 0, md: 12 }} textAlign={{ base: "center", md: "left" }}>
            <Text
              w={"full"}
              whiteSpace="nowrap"
              color={"primaryColor"}
              fontSize={{ base: "md", sm: "lg", md: "xl" }} // Responsive text size
            >
              TESTIMONIAL
            </Text>

            {/* Main Text */}
            <Box py={4}>
              {textItem("What our clients say")}
            </Box>

            {/* Testimonial Text */}
            <Flex direction="column" align="flex-start" w="full">
              <Text mb={2} fontSize={{ base: "sm", md: "md" }} textAlign={{ base: "center", md: "left" }}>
                Let me be honest here, they are the best guest post service provider to me. I have tried TheHoth and some others before. The quality is the best and the pricing is unbelievably lower than anyone else. The Onelittleweb team is well aware of their job and they do a great job.
              </Text>

              {/* Client Info */}
              <Box py={4} textAlign={{ base: "center", md: "right" }}> {/* Center text on mobile */}
                <Text fontWeight="bold">Wade Warren</Text>
                <Text>Azialab Inc</Text>
              </Box>
            </Flex>
          </Box>

          {/* Image Section */}
          <Flex justify={"end"} w={{ base: "100%", md: "40%" }} mt={{ base: 6, md: 0 }}>
            <Image src={Banner} alt="Banner" w={{ base: "80%", md: "35vw" }} />
          </Flex>
        </Flex>
      </Box>
    </section>
  );
}

export default Testimonial;
