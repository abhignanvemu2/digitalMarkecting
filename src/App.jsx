import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import "./App.css";
import Navbar from "./Components/Navbar";
import GraphicDesigning from "./Views/GraphicDesigning";
import Videos from "./Views/Videos";

function App() {
  return (
    <Flex h="100vh" position="relative" maxH="1440px" justifyContent="center">
      <Box
        w={{ base: "344px", sm:"auto", md: "1200px" }}
        top={12}
        bottom={0}
        left={0}
        right={0}
        overflow="auto"
      >
        <Navbar>
          <Routes>
            <Route path="/graphic-design" element={<GraphicDesigning />} />
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </Navbar>
      </Box>
    </Flex>
  );
}

export default App;
