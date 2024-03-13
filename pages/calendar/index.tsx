import {
  Grid,
  Box,
  Image,
  Container,
  Button,
  Card,
  Text,
  Flex,
  rem,
  Paper,
} from "@mantine/core";
import Time from "./tanggal";
import { useState } from "react";
// import cx from 'clsx';

// import { createTheme, MantineProvider } from '@mantine/core';

// const theme = createTheme({
//   breakpoints: {
//     xs: '30em',
//     sm: '48em',
//     md: '64em',
//     lg: '74em',
//     xl: '90em',
//   },
// });

export default function Page() {
  return (
    <Container fluid bg="#005E6A">
      <Container
        pos={{ base: "absolute", xl: "relative" }}
        pl={{ base: "10px", sm: "20px", xs: "lg" }}
      >
        <Flex
          gap={{ base: "3%" }}
          mt={{ base: "7%", lg: "3%", xl: "0%" }}
          w="100%"
          ml={{ xl: "0%", md: "25%", lg: "10%", xs: "100px" }}
          align="center"
          justify={{
            base: "center",
            xl: "center",
            md: "right",
            sm: "center",
            xs: "center",
            lg: "center",
          }}
        >
          <Image
            fit="contain"
            mt={{ base: "0%", xl: "5%" }}
            w={{ base: "30%", xl: "25%", md: "35%", lg: "20%", xs: "25%" }}
            src="/bumn.png"
          />
          <Image
            fit="contain"
            mt={{ base: "0%", xl: "5%" }}
            w={{ base: "30%", xl: "25%", md: "35%", lg: "20%", xs: "25%"}}
            src="/Petrokimia.png"
          />
          <Image
            fit="contain"
            mt={{ base: "0%", xl: "5%" }}
            w={{ base: "30%", xl: "25%", md: "35%", lg: "20%", xs: "25%" }}
            src="/pi.png"
          />
        </Flex>
      </Container>
      <Grid pt={{ base: "2px", md: "100px", xl: "20px", lg: "180px" }}>
        <Grid.Col span={{ base: 12, xl: 4, md: 6 }}>
          <Container
            pt={{ xl: "5px", lg: "0px" }}
            ml={{ xl: "55%", base: "15%" }}
            pb="10px"
            w={{ xl: "50%", md: "50%", xs: "10%", sm: "10%", lg: "20%" }}
          >
            <Image
              fit="contain"
              mt={{ base: "40%", xl: "20%" }}
              w={{ lg: "400%", xl: "120%", base: "80%" }}
              src="/masjid_petrokimia.webp"
            />
          </Container>
          {/* <Container mt="10px" ml={{xl:"50%", base:"0%"}} mr={{xl:"0%", lg:"30%", base:"0%"}}>
                <Text c="#FFD700" ta="center" fw={300} fz={{base:"12pt", xl:"18pt", lg:"20pt"}} ml={{base:"0%",lg:"40%", xl:"0%"}}>
                  Masjid Petrokimia
                </Text>
              </Container> */}
          <Container
            mt="40px"
            ml={{ xl: "35%", lg: "0%", base: "0%" }}
            w="100%"
          >
            <Text
              c="#FFD700"
              ta="left"
              ml={{ base: "25%", lg: "30%", xl: "25%" }}
              fw={700}
              fz={{ xl: "28px", base: "19px", lg: "20pt" }}
            >
              Jadwal Imsakiyah <br />
            </Text>
            <Text
              pt={{ xl: "2%", base: "0%", lg: "2%" }}
              c="#FFD700"
              ta="left"
              ml={{ base: "27%", lg: "30%", xl: "28%" }}
              fw={300}
              fz={{ xl: "28px", base: "19px", lg: "20pt" }}
            >
              Ramadan 1445H
            </Text>
          </Container>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, xl: 8 }}>
          <Container pos="relative">
            <Flex
              pt={{ base: "10px", xl: "50px", lg: "5px" }}
              pb="10px"
              direction="column"
              align="center"
              w={{ xl: "100%", xs: "100%", lg: "50%" }}
            >
              <Text
                ml={{ lg: "10%", xl: "3%" }}
                ta="center"
                c="#FFD700"
                fz={{ xl: "21px", base: "15px" }}
              >
                Untuk Wilayah <b>Gresik</b>, <b>Surabaya</b>,<b>Sidoarjo</b> <br />
                (dan sekitarnya)
              </Text>
              <Time />
            </Flex>
          </Container>
        </Grid.Col>
      </Grid>
      <Flex
        mt="70px"
        justify={{ sm: "center" }}
        gap={{ base: "sm", sm: "lg" }}
        direction={{ base: "column", sm: "row" }}
      >
        <Container w="100%" mt={{ xl: "4%" }}>
          <Flex direction="row" justify="center">
            <a href="https://www.instagram.com/petrokimiagresik_official?igsh=eGI5eHVscDhtNzJl&utm_source=qr">
              <Image
                fit="contain"
                w={{ base: "20px", xl: "30px" }}
                ml={{ xl: "10%" }}
                c="white"
                src="/instagram.png"
              />
            </a>
            <Text ml="10px" mt="4px" c="white" ta="center">
              {" "}
              Petrokimia
            </Text>
            <a href="https://petrokimia-gresik.com">
              <Image
                fit="contain"
                w={{ base: "20px", xl: "30px" }}
                ml="15px"
                src="/browser.png"
              />
            </a>
            <a href="https://petrokimia-gresik.com">
              <Text ml="10px" mt="5px" c="white" ta="center">
                {" "}
                petrokimia-gresik.com
              </Text>
            </a>
            <a href="https://twitter.com/petrogresik"><Image fit="contain" w="28px" ml="15px" src="/twitter.png"/>
            </a>
            <a href="https://twitter.com/petrogresik">
              <Text ml="10px" mt="5px" c="white" ta="center">
                petrogresik{" "}
              </Text>
            </a>
          </Flex>
        </Container>
      </Flex>
      <Container mt={{ xl: "4%", lg: "3%" }}>
        <br />
      </Container>
    </Container>
  );
}
