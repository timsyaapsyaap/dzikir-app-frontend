import { Stack, Box, Text, Center } from "@chakra-ui/react";

import React from "react";

export default function Footer() {
  return (
    <Center mt={"3rem"}>
      <Stack
        width={"100%"}
        textAlign={{ base: "center", md: "left" }}
        py={"3rem"}
      >
        <Text color={"dzikir.green"} fontSize={{ base: "sm" }}>
          <Box as={"span"} fontWeight={"semibold"}>
            © {new Date().getFullYear()} TIM SYAAP SYAAP
          </Box>{" "}
          All rights reserved.
        </Text>
      </Stack>
    </Center>
  );
}
