import { Box, VStack } from "@chakra-ui/react";
import React from "react";

interface PrivacyPolicyProps {
  title: string;
  description: string;
}

export default function PrivacyPolicyContent({
  title,
  description,
}: PrivacyPolicyProps) {
  return (
    <VStack alignItems={"left"} my={"2rem"}>
      <Box
        as={"h1"}
        fontSize={{
          base: "1rem",
          md: "2rem",
        }}
        fontWeight={"medium"}
      >
        💠 {title}
      </Box>
      <Box as="p">{description}</Box>
    </VStack>
  );
}
