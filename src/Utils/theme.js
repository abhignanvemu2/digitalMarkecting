import { extendTheme } from "@chakra-ui/react";

export const appTheme = extendTheme({
  config: {
    cssVarPrefix: "ck",
  },
  colors: { 
    app: "#00bfff", 
    primaryColor: '#F2761B' , //F2761B
    darkPrimaryColor: '#E64A00',
  },
  fontSizes: {
    // sm: "12px",
    // md: "14px",
  },
  fonts: {
    heading: "'Poppins', sans-serif",  // For headings
    body: "'Poppins', sans-serif",     // For body text
  },
});
