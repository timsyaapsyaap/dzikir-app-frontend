import {
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { IoMail } from "react-icons/io5";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>
        <Link href={`mailto:${text}`}>{text}</Link>
      </Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"8xl"} py={"12%"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Center>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              bg={"dzikir.green"}
              color={"white"}
              fontWeight={600}
              fontSize={"sm"}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              CONTACT SUPPORT
            </Text>
            <Heading>Terimakasih Telah Mengunakan DzikirApp</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Jika ada pertanyaan dan keluhan silahkan hubungi kontak dibawah
              ini.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={<Icon as={IoMail} color={"dzikir.green"} w={5} h={5} />}
                iconBg={"dzikir.accentbg"}
                text={"fahmialfareza@dzikirapp.com"}
              />
            </Stack>
          </Stack>
        </Center>

        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://ik.imagekit.io/sdafj93nd65/Group_60Gd4zn56.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660010416018"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
