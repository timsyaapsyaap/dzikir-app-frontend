import { IconAndroid } from "@/components/atoms/IconAndroid";
import { IconIos } from "@/components/atoms/IconIos";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Hide,
  IconButton,
  Image,
  Show,
  Tag,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box mt={"2rem"}>
      <Container maxW={"1440px"}>
        <Box bg={"dzikir.bg"} borderRadius={"2rem"} mt={"2rem"} p={"3rem"}>
          <Box
            as={"h1"}
            fontWeight={"bold"}
            fontSize={{
              base: "3rem",
              md: "6rem",
            }}
            lineHeight={1}
          >
            DzikirAPP
            <Box as={"span"}>
              <Tag variant="solid" size={"lg"} bg={"dzikir.green"}>
                BETA
              </Tag>
            </Box>
          </Box>
          <Box
            as="p"
            fontSize={"1rem"}
            maxW={"44rem"}
            my={"1rem"}
            color={"text.body"}
            textAlign={"left"}
            fontWeight={"medium"}
          >
            {`  Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </Box>
          <Button
            bg={"dzikir.accentbg"}
            color={"dzikir.green"}
            fontWeight={"medium"}
          >
            {`"Quote or Tagline Here"`}
          </Button>
        </Box>
        <Grid
          templateColumns={{
            md: "repeat(3, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          gap={2}
          mt={"2rem"}
        >
          <Hide above="sm">
            <GridItem w="100%">
              <Box
                position={{
                  md: "relative",
                }}
              >
                <Box
                  position={{
                    md: "absolute",
                  }}
                  top={{
                    md: -309,
                  }}
                  left={{
                    md: -12,
                  }}
                >
                  <Image
                    width={"500px"}
                    alt={"Dzikir App"}
                    src={
                      "https://ik.imagekit.io/sdafj93nd65/Mobile_cbIkDEKGm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658638310790"
                    }
                  />
                </Box>
              </Box>
            </GridItem>
          </Hide>

          <GridItem w="100%">
            <Box
              bg={"dzikir.green"}
              p={"2rem"}
              borderRadius={"2rem"}
              maxW={"420px"}
            >
              <VStack>
                <Box color={"white"} fontSize={"1.2rem"} fontWeight={"medium"}>
                  Scan Barcode
                </Box>
                <Box>
                  <Image
                    alt={"Barcode"}
                    src={DATA_APP_ANDROID.barcodeImage}
                    borderRadius={"1rem"}
                  />
                </Box>
                <Box color={"white"} fontSize={"1.2rem"} fontWeight={"medium"}>
                  Or
                </Box>
                <Box width={"full"}>
                  <Link href={"/#"}>
                    <IconButton
                      width={"full"}
                      aria-label="Android App Download "
                      _hover={{ bg: "black", border: "1px solid white" }}
                      bg={"black"}
                      py={"2rem"}
                      size="lg"
                      icon={<IconAndroid boxSize={"96px"} />}
                    />
                  </Link>
                </Box>
              </VStack>
            </Box>
          </GridItem>
          <GridItem w="100%">
            <Box
              bg={"dzikir.green"}
              p={"2rem"}
              borderRadius={"2rem"}
              maxW={"420px"}
            >
              <VStack>
                <Box color={"white"} fontSize={"1.2rem"} fontWeight={"medium"}>
                  Scan Barcode
                </Box>
                <Box>
                  <Image
                    alt={"Barcode"}
                    src={DATA_APP_ANDROID.barcodeImage}
                    borderRadius={"1rem"}
                  />
                </Box>
                <Box color={"white"} fontSize={"1.2rem"} fontWeight={"medium"}>
                  Or
                </Box>
                <Box width={"full"}>
                  <Link href={"/#"}>
                    <IconButton
                      width={"full"}
                      aria-label="Ios App Download"
                      _hover={{ bg: "black", border: "1px solid white" }}
                      bg={"black"}
                      py={"2rem"}
                      size="lg"
                      icon={<IconIos boxSize={"96px"} />}
                    />
                  </Link>
                </Box>
              </VStack>
            </Box>
          </GridItem>
          <Show above="sm">
            <GridItem w="100%">
              <Box
                position={{
                  md: "relative",
                }}
              >
                <Box
                  position={{
                    md: "absolute",
                  }}
                  top={{
                    md: -309,
                  }}
                  left={{
                    md: -12,
                  }}
                >
                  <Image
                    width={"500px"}
                    alt={"Dzikir App"}
                    src={
                      "https://ik.imagekit.io/sdafj93nd65/Mobile_cbIkDEKGm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658638310790"
                    }
                  />
                </Box>
              </Box>
            </GridItem>
          </Show>
        </Grid>
      </Container>
    </Box>
  );
};

const DATA_APP_ANDROID = {
  barcodeImage:
    "https://ik.imagekit.io/sdafj93nd65/ihr_qr_code_ohne_logo_MpmqqTIBN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658637303671",
  appUrl: "https://dzikirapp.com",
};
// const DATA_APP_IOS = {
//   barcodeImage:
//     "https://ik.imagekit.io/sdafj93nd65/ihr_qr_code_ohne_logo_MpmqqTIBN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658637303671",
//   appUrl: "https://dzikirapp.com",
// };

export default Home;
