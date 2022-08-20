import PrivacyPolicyContent from "@/components/molecules/PrivacyPolicy";
import { Box, Center, Container, HStack } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <Box position="relative">
      <Box className="bg-gradient" zIndex={-200} h={"50vh"}></Box>
      <Container maxW={"8xl"}>
        <Center
          position={"absolute"}
          left={{
            base: "10%",
            md: "30%",
          }}
          right={{
            base: "10%",
            md: "30%",
          }}
          top={"30%"}
        >
          <Box
            bg={"white"}
            boxShadow={"lg"}
            p={{
              base: "2rem",
              md: "4rem",
            }}
            borderRadius={"2rem"}
            mb={"10rem"}
          >
            <Box
              w={{
                base: "100%",
                md: "5xl",
              }}
            >
              <HStack justifyContent={"center"}>
                <Box
                  as="h1"
                  fontSize={{
                    base: "2rem",
                    md: "5rem",
                  }}
                  color={"dzikir.green"}
                  fontWeight={"bold"}
                  mb={"4rem"}
                >
                  Kebijakan Privasi
                </Box>
              </HStack>
              <Box as="p">
                Kebijakan Privasi Berikut ini adalah kebijakan privasi Dzikir
                App. Dzikir App merupakan aplikasi yang dibuat oleh Fahmi
                Alfareza, Ahmad Aji Santoso, dan Achmad Fatkharrofiqi. Kebijakan
                Privasi ini menjelaskan bagaimana kami mengumpulkan,
                menggunakan, menyingkapkan, memproses dan melindungi informasi
                Data Pribadi Anda sebagai Pengguna. Di aplikasi kami, Data
                Pribadi seseorang tidak dikumpulkan. Dzikir App dapat malakukan
                revisi atau perubahan Kebijakan Privasi ini yang disesuaikan
                dengan situasi hukum, atau atas dasar pengumpulan dan praktik
                penggunaan Data Pribadi, fitur aplikasi kami, atau kemajuan
                dalam teknologi. Bila terjadi perubahan tersebut, maka akan
                dimuat di dalam Kebijakan Privasi ini berikut tanggal berlaku
                dari perubahan tersebut. Oleh karena itu, Anda harus meninjau
                Kebijakan Privasi ini secara berkala. Dzikir App juga akan
                memasang dengan jelas perubahan materi tersebut sebelum
                mengimplementasikan perubahannya.
              </Box>
              <PrivacyPolicyContent
                title={"Aktifitas Pengumpulan Data"}
                description={
                  "Saat ini, kami tidak mengumpulkan Data Pribadi Anda saat menggunakan Aplikasi. Data Pribadi tersebut tidak terbatas pada nama Anda, identifikasi pengguna Dzikir App dan kredensial login, alamat, nomor telepon, alamat e-mail, nama produk, lokasi pelaksanaan layanan produk dan/atau lama layanan. Kami juga tidak mengumpulkan informasi non-pribadi yang teridentifikasi (yang tidak dapat digunakan untuk mengidentifikasi Anda), termasuk alamat protokol internet (“IP”) Anda, data lokasi geografis, jenis sistem pengoperasian, preferensi pencarian, begitu pula data umum lainnya terkait penggunaan Internet. Kami hanya meminta persetujuan Anda untuk mengizinkan lokasi Anda saat menggunakan aplikasi dan itu hanya opsional serta kami tidak akan menyimpan data lokasi Anda berada. Jikapun tidak diizinkan mengakses lokasi, aplikasi tetap berjalan dengan semestinya."
                }
              />
              <PrivacyPolicyContent
                title={"Penggunaan Informasi Anda"}
                description={
                  "Kami tidak menggunakan Data Pribadi Anda dan informasi lainnya yang dikumpulkan untuk tujuan pemasaran digital dan konvensional seperti mengirimkan Anda surat elektronik langsung dan memberitahukan tentang produk baru, penawaran khusus atau informasi lain. Anda dapat memilih untuk keluar atau berhenti berlangganan yang diatur di dalam materi pemasaran kami jika Anda memilih untuk keluar dari setiap materi pemasaran, dan kami akan menghentikan layanan yang dimaksud."
                }
              />
              <PrivacyPolicyContent
                title={"Membagi Data Diri Anda"}
                description={
                  "Dzikir App tidak membagi data pribadi kepada entitas lain."
                }
              />
            </Box>
          </Box>
        </Center>
      </Container>
    </Box>
  );
}
