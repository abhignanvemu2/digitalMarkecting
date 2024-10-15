import { Box, Grid, Text, Image, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import contentMarketing from "../assets/content.png";
import seo from "../assets/seo.png";
import marketing from "../assets/markecting.png";

const Card = ({ imageSrc, title, description }) => {
  return (
    <Box
      p={4}
      borderRadius="md"
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border={{base:"1px solid #F2761B", md: "none"}}
      _hover={{
        cursor: "pointer",
        boxShadow: "13px 10px 29px -5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Image src={imageSrc} alt={title} />
      <Text py={7} fontWeight="bold">
        {title}
      </Text>
      <Text py={5} fontSize={"15px"}>
        {description}
      </Text>
      <Text py={5} _hover={{ color: "primaryColor", fontSize: "20px" }}>
        Read More
      </Text>
    </Box>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Services() {
  return (
    <section id="services" className="p-4">
      <Flex justify="center" w="full" pt={4}>
        <Box>
          <Text color="primaryColor" fontSize={{ base: "sm", md: "md" }} textAlign="center">
            OUR EXPERTISE
          </Text>
          <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight={"bold"} textAlign="center" pt={2}>
            Providing best services
          </Text>
        </Box>
      </Flex>

      {/* Cards using Grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // 1 column on mobile, 3 columns on medium+
        gap={6} // Gap between grid items
        pt={12}
      >
        <Card
          imageSrc={contentMarketing}
          title="Content Marketing"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
        />
        <Card
          imageSrc={seo}
          title="Seo Optimization"
          description="Sed ut perspiciatis unde omnis iste nat us error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
        />
        <Card
          imageSrc={marketing}
          title="Social Marketing"
          description="Sed ut perspiciatis unde omnis iste nat us error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
        />
      </Grid>
    </section>
  );
}

export default Services;
