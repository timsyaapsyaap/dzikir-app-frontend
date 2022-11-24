import Head from "next/head";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

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
      <Head>
        <title>Dzikir App | Aplikasi Dzikir dan Tasbih</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>

      <Component {...pageProps} />

      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
