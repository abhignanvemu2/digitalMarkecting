import { Box, Flex, Text, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import contentMarketing from "../assets/content.png";
import seo from "../assets/seo.png";
import marketing from "../assets/markecting.png";

const Card = ({ price, title, description }) => {
  return (
    <Box
      p={4}
      borderRadius="md"
      flex="1"
      maxW={{ base: "100%", md: "30%" }} // Adjusts width on smaller screens
      mb={{ base: 8, md: 0 }} // Adds margin for spacing on small screens
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="1px solid #F2761B"
      _hover={{
        cursor: "pointer",
        boxShadow: "13px 10px 29px -5px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Title */}
      <Text py={7} fontWeight="medium">
        {title}
      </Text>

      {/* Price */}
      <Text py={2} color={"primaryColor"}>
        {price}
      </Text>

      {/* Description */}
      {description.map((item, index) => (
        <Text py={2} key={index} fontSize={"15px"}>
          {item}
        </Text>
      ))}

      {/* Button */}
      <Box py={6}>
        <Button
          _hover={{ bg: "primaryColor", color: "white", border: "none" }}
          border={"1px solid #d3d3d3"}
          bg="white"
          w={"full"}
          color={"black"}
        >
          Start Now
        </Button>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired, // Adjusted to array
};

function Pricing() {
  return (
    <section id="pricing" className="">
      {/* Header */}
      <Flex justify="center" w="full" pt={4}>
        <Box>
          <Text color="primaryColor" fontSize="md" textAlign="center">
            PRICING
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={"bold"} textAlign="center" pt={2}>
            Choose your best affordable plan
          </Text>
        </Box>
      </Flex>

      {/* Cards */}
      <Flex
        justify={{ base: "center", md: "space-between" }} // Center on small screens, spaced on large screens
        align="center"
        wrap="wrap" // Allow wrapping on smaller screens
        pt={12}
        gap={6} // Add gap for spacing between cards
      >
        <Card
          imageSrc={contentMarketing}
          title="One Time"
          price="Free/Month"
          description={[
            "15 Analytics Campaign",
            "Remote Administrator",
            "Software Configuration",
            "Threat Protection",
            "24/7 Support",
          ]}
        />
        <Card
          imageSrc={seo}
          price="$149/Month"
          title="Business"
          description={[
            "15 Analytics Campaign",
            "Remote Administrator",
            "Software Configuration",
            "Threat Protection",
            "24/7 Support",
          ]}
        />
        <Card
          price="$499/Month"
          imageSrc={marketing}
          title="Exclusive"
          description={[
            "15 Analytics Campaign",
            "Remote Administrator",
            "Software Configuration",
            "Threat Protection",
            "24/7 Support",
          ]}
        />
      </Flex>
    </section>
  );
}

export default Pricing;
