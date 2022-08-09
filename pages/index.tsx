import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { IconAndroid } from "@/components/atoms/IconAndroid";
import { IconIos } from "@/components/atoms/IconIos";
import Footer from "@/components/molecules/Footer";
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Show,
  Tag,
  VStack,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dzikir App | Aplikasi Dzikir dan Tasbih</title>
        <meta name="title" content="Dzikir App | Aplikasi Dzikir dan Tasbih" />
        <meta
          name="description"
          content="Merupakan sebuah aplikasi yang digunakan untuk mengajak teman-teman untuk terus berdzikir. Di dalam aplikasi ini, teman-teman dapat membuat target tasbih dan menghitungnya. Lalu, teman-teman juga dapat melakukan dzikir pagi dan petang dengan bantuan aplikasi ini. Tentunya juga dilengkapi dengan doa sehari-hari. Teman-teman juga dapat melihat jadwal sholat dan membaca Al-Quran di aplikasi ini. Dan yang paling menarik dari aplikasi ini adalah aplikasi ini bebas iklan. Selamat menggunakan aplikasi ini, teman-teman. Jazakumullahu khairan."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dzikirapp.com/" />
        <meta
          property="og:title"
          content="Dzikir App | Aplikasi Dzikir dan Tasbih"
        />
        <meta
          property="og:description"
          content="Merupakan sebuah aplikasi yang digunakan untuk mengajak teman-teman untuk terus berdzikir. Di dalam aplikasi ini, teman-teman dapat membuat target tasbih dan menghitungnya. Lalu, teman-teman juga dapat melakukan dzikir pagi dan petang dengan bantuan aplikasi ini. Tentunya juga dilengkapi dengan doa sehari-hari. Teman-teman juga dapat melihat jadwal sholat dan membaca Al-Quran di aplikasi ini. Dan yang paling menarik dari aplikasi ini adalah aplikasi ini bebas iklan. Selamat menggunakan aplikasi ini, teman-teman. Jazakumullahu khairan."
        />
        <meta
          property="og:image"
          content="https://www.dzikirapp.com/images/icons/icon-512.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dzikirapp.com/" />
        <meta
          property="twitter:title"
          content="Dzikir App | Aplikasi Dzikir dan Tasbih"
        />
        <meta
          property="twitter:description"
          content="Merupakan sebuah aplikasi yang digunakan untuk mengajak teman-teman untuk terus berdzikir. Di dalam aplikasi ini, teman-teman dapat membuat target tasbih dan menghitungnya. Lalu, teman-teman juga dapat melakukan dzikir pagi dan petang dengan bantuan aplikasi ini. Tentunya juga dilengkapi dengan doa sehari-hari. Teman-teman juga dapat melihat jadwal sholat dan membaca Al-Quran di aplikasi ini. Dan yang paling menarik dari aplikasi ini adalah aplikasi ini bebas iklan. Selamat menggunakan aplikasi ini, teman-teman. Jazakumullahu khairan."
        />
        <meta
          property="twitter:image"
          content="https://www.dzikirapp.com/images/icons/icon-512.png"
        />
      </Head>

      <Box mt={"2rem"}>
        <Container maxW={"1440px"}>
          <Box bg={"dzikir.bg"} borderRadius={"2rem"} mt={"2rem"} p={"2.5rem"}>
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
              maxW={"52rem"}
              my={"1rem"}
              color={"text.body"}
              textAlign={"justify"}
              fontWeight={"normal"}
            >
              {`Merupakan sebuah aplikasi yang digunakan untuk mengajak teman-teman untuk terus berdzikir. Di dalam aplikasi ini, teman-teman dapat membuat target tasbih dan menghitungnya. Lalu, teman-teman juga dapat melakukan dzikir pagi dan petang dengan bantuan aplikasi ini. Tentunya juga dilengkapi dengan doa sehari-hari. Teman-teman juga dapat melihat jadwal sholat dan membaca Al-Quran di aplikasi ini. Dan yang paling menarik dari aplikasi ini adalah aplikasi ini bebas iklan. Selamat menggunakan aplikasi ini, teman-teman. Jazakumullahu khairan.`}
            </Box>
            <Box
              bg={"dzikir.accentbg"}
              p={"0.5rem"}
              color={"dzikir.green"}
              fontWeight={{ base: "medium", md: "bold" }}
              borderRadius={"0.5rem"}
              maxW={{
                base: "30rem",
                md: "40rem",
              }}
            >
              {`"Maka ingatlah kepada-Ku, Aku pun akan ingat kepadamu." (QS. Al-Baqarah:152)`}
            </Box>
          </Box>
          <Grid
            templateColumns={{
              md: "repeat(3, 1fr)",
              sm: "repeat(1, 1fr)",
            }}
            gap={2}
            mt={"2rem"}
          >
            <Show below="md">
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
                        "https://ik.imagekit.io/sdafj93nd65/Mobile_e8j8IusvT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659749856251"
                      }
                    />
                  </Box>
                </Box>
              </GridItem>
            </Show>

            <GridItem w="100%">
              <Box
                bg={"dzikir.green"}
                p={"2rem"}
                borderRadius={"2rem"}
                maxW={"420px"}
              >
                <VStack>
                  <Box
                    color={"white"}
                    fontSize={"1.2rem"}
                    fontWeight={"medium"}
                  >
                    Scan Barcode
                  </Box>
                  <Box>
                    <Image
                      alt={"Barcode"}
                      src={DATA_APP_ANDROID.barcodeImage}
                      borderRadius={"1rem"}
                    />
                  </Box>
                  <Box
                    color={"white"}
                    fontSize={"1.2rem"}
                    fontWeight={"medium"}
                  >
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
                  <Box
                    color={"white"}
                    fontSize={"1.2rem"}
                    fontWeight={"medium"}
                  >
                    Scan Barcode
                  </Box>
                  <Box>
                    <Image
                      alt={"Barcode"}
                      src={DATA_APP_ANDROID.barcodeImage}
                      borderRadius={"1rem"}
                    />
                  </Box>
                  <Box
                    color={"white"}
                    fontSize={"1.2rem"}
                    fontWeight={"medium"}
                  >
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
                        "https://ik.imagekit.io/sdafj93nd65/Mobile_e8j8IusvT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659749856251"
                      }
                    />
                  </Box>
                </Box>
              </GridItem>
            </Show>
          </Grid>
          <HStack justifyContent={"center"} width={"full"} mt={"3rem"}>
            <Footer />
          </HStack>
        </Container>
      </Box>
    </>
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
