import { Box, Flex, Text } from "@chakra-ui/react";
import samplePdf from "/src/assets/pdf/sample.pdf";
import test from "/src/assets/pdf/test.pdf";

function GraphicsDesigning() {
  
  return (
    <Flex h="100vh" p={4} flexDirection="column">
      {/* Title */}
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Graphics Designing
      </Text>
      {/* Container with two scrollable sections */}
      <Flex flex="1" gap={4}>
        {/* Section 1 */}
        <Box
          flex="1"
          overflowY="scroll"
          border="1px solid #d3d3d3"
          borderRadius="md"
          p={4}
          h="full"
        >
          {/* <Document file={samplePdf} onLoadSuccess={onDocumentLoadSuccess1}>
            {Array.from(new Array(numPages1), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
              </Document> */}
              <iframe src={samplePdf} width="100%" height="100%" />
        </Box>

        {/* Section 2 */}
        <Box
          flex="1"
          overflowY="scroll"
          border="1px solid #d3d3d3"
          borderRadius="md"
          p={4}
          h="full"
        >
          {/* <Document file={test} onLoadSuccess={onDocumentLoadSuccess2}>
            {Array.from(new Array(numPages2), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document> */}
              <iframe src={test} width="100%" height="100%"/>

        </Box>
      </Flex>
    </Flex>
  );
}

export default GraphicsDesigning;
