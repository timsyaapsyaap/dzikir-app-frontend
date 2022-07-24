import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    dzikir: {
      green: "#26A2B2",
      bg: "#F4F2F9",
      accentbg: "#E1EDF3",
    },
    text: {
      body: "#515151",
      black: "#212529",
    },
    fonts: {
      body: "Poppins, sans-serif",
      heading: "Poppins, sans-serif",
      mono: "Poppins, monospace",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
