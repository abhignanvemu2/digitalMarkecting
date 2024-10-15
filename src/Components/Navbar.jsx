import PropTypes from "prop-types";
import { Box, Flex, Text, IconButton, Slide } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link

function NavbarItem({ label, onClick, to }) {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        p={4}
        _hover={{ cursor: "pointer", color: "primaryColor" }}
        onClick={onClick}
      >
        {label}
      </Box>
    </Link>
  );
}

NavbarItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired, // Add to prop for the route
};

function Logo() {
  return (
    <Box p={4} textAlign="center">
      <Text fontWeight={"extrabold"} fontSize={"xl"}>
        LOGO
      </Text>
    </Box>
  );
}

function Navbar({ children }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w={"100%"} position="sticky" top={0} zIndex={10}>
      {/* Navbar content */}
      <Flex justify={"space-between"} align={"center"} pt={4} px={4} wrap={{ base: "wrap", md: "nowrap" }}>
        {/* Left Menu */}
        <Flex display={{ base: "none", md: "flex" }}>
          <NavbarItem label="Graphic Design" to="/graphic-design" />
          <NavbarItem label="Videos" to="/videos" />
        </Flex>

        {/* Center Logo */}
        <Flex justify="center" flexGrow={1}>
          <Logo />
        </Flex>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          aria-label="Toggle Navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        />

        {/* Right Menu */}
        <Flex display={{ base: "none", md: "flex" }}>
          <NavbarItem label="Home" to="/" />
          <NavbarItem label="Services" to="#services" />
          <NavbarItem label="About us" to="#about" />
          <NavbarItem label="Pricing" to="#pricing" />
        </Flex>
      </Flex>

      {/* Mobile Menu with Slide Effect */}
      <Slide direction="right" in={isOpen} style={{ zIndex: 20 }}>
        <Box
          bg="white"
          width="250px" // Width of the sidebar
          position="fixed"
          right={0}
          top={0}
          shadow="md"
          height="100%" // Ensures that the Slide takes the height of the entire content, but doesn't affect the footer
          overflow="auto" // Allows scrolling if the Slide content exceeds the viewport height
        >
          <Flex flexDirection="column" alignItems="flex-start" height="100%">
            {/* Close Button */}
            <IconButton
              aria-label="Close Menu"
              icon={<CloseIcon />}
              onClick={onToggle}
              variant="outline"
              alignSelf="flex-end"
              m={2} // margin for spacing
            />

            <NavbarItem label="Home" onClick={onToggle} to="/" />
            <NavbarItem label="Services" onClick={onToggle} to="/services" />
            <NavbarItem label="About us" onClick={onToggle} to="/about" />
            <NavbarItem label="Pricing" onClick={onToggle} to="/pricing" />
            <NavbarItem label="Graphic Design" onClick={onToggle} to="/graphic-design" />
            <NavbarItem label="Videos" onClick={onToggle} to="/videos" />
          </Flex>
        </Box>
      </Slide>

      {/* Children content */}
      <Box p={8} minHeight="calc(100vh - 50px)">
        {children}
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} position="relative" zIndex={1} mt="auto">
        <Flex justify="center">
          <Text>© {new Date().getFullYear()} Your Company. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
