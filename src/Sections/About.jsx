import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Banner from "../assets/Girl.png";

function About() {
  const textItem = (text) => {
    return (
      <Box>
        <Text
          w={"full"}
          whiteSpace="nowrap"
          lineHeight={"45px"}
          fontWeight={"semibold"}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} // Responsive font sizes
        >
          {text}
        </Text>
      </Box>
    );
  };

  return (
    <section id="about" className="py-5">
      <Box h={{ base: "auto", md: "65vh" }} w={"full"} py={{ base: 5, md: 0 }}>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack content vertically on small screens, horizontally on larger
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems={"center"}
          h="full"
        >
          {/* Text Section */}
          <Box w={{ base: "100%", md: "50%" }} textAlign={{ base: "center", md: "left" }}>
            <Text
              w={"full"}
              whiteSpace="nowrap"
              color={"primaryColor"}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }} // Responsive font size for heading
            >
              ABOUT US
            </Text>

            {/* Heading Text */}
            <Box py={4}>
              {textItem("We are one of the best")}
              {textItem("seo company")}
            </Box>

            {/* Description Text */}
            <Flex justifyContent={{ base: "center", md: "flex-start" }}>
              <Text textAlign={{ base: "center", md: "left" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </Text>
            </Flex>
          </Box>

          {/* Image Section */}
          <Flex
            justify={{ base: "center", md: "end" }}
            w={{ base: "100%", md: "50%" }}
            mt={{ base: 5, md: 0 }}
            display={"flex"} // Ensure image is always visible
          >
            <Image src={Banner} alt="Banner" w={{ base: "80%", sm: "60%", md: "35vw" }} />
          </Flex>
        </Flex>
      </Box>
    </section>
  );
}

export default About;
