import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box width={"full"} py={"3rem"}>
      <HStack
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Text color={"dzikir.green"} fontSize={{ base: "sm" }}>
          <Box as={"span"} fontWeight={"semibold"}>
            © {new Date().getFullYear()} TIM SYAAP SYAAP
          </Box>{" "}
          All rights reserved.
        </Text>
        <HStack spacing={"2rem"}>
          <Button
            size="lg"
            bg={"dzikir.green"}
            _hover={{ bg: "dzikir.green" }}
            color={"white"}
          >
            <Link href={"/support"}>Contact Support</Link>
          </Button>
          <Box fontWeight={"bold"} color={"dzikir.green"}>
            <Link href={"/privacypolicy"}>Privacy Policy</Link>
          </Box>
        </HStack>
        {/* <Box
          color={"dzikir.green"}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: "3rem", md: 0 }}
        >
          Contact Support :{" "}
          <Box as={"span"} fontWeight={"medium"}>
            admin@dzikirapp.com
          </Box>
        </Box> */}
      </HStack>
    </Box>
  );
}
