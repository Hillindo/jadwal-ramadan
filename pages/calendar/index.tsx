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
  BackgroundImage,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Time from "./tanggal";
import { useRef, useState } from "react";
import { Router, useRouter } from "next/router";
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
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const route = useRouter();
  const handleClick = () => {
    route.push("https://petro.hillindo-digital.com/");
  };
  return (
  // <BackgroundImage src="/DJI_0968-after.jpg"> 
    <Container fluid style={{backgroundImage:"linear-gradient(rgba(0, 94, 106, 0.6),rgba(0, 94, 106, 0.6)),url(/DJI_0968-after.jpg)", backgroundSize:"cover", backgroundPosition:"center"}}>    
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
            onClick={handleClick}
            fit="contain"
            mt={{ base: "0%", xl: "5%" }}
            w={{ base: "30%", xl: "25%", md: "35%", lg: "20%", xs: "25%" }}
            src="/bumn.png"
          />
          <Image
            onClick={handleClick}
            fit="contain"
            mt={{ base: "0%", xl: "5%" }}
            w={{ base: "30%", xl: "25%", md: "35%", lg: "20%", xs: "25%" }}
            src="/Petrokimia.png"
          />
          <Image
            onClick={handleClick}
            fit="contain"
            mt={{ base: "0%", xl: "5%" }}
            w={{ base: "30%", xl: "25%", md: "35%", lg: "20%", xs: "25%" }}
            src="/pi.png"
          />
        </Flex>
      </Container>
      <Grid pt={{ base: "2px", xl: "20px", lg: "180px" }}>
        <Grid.Col span={{ base: 12, xl: 4, md: 6 }}>
          <Container
            pt={{ xl: "70px", lg: "0px", base:"40%" }}
            ml={{ xl: "55%", base: "11%" }}
            pb="10px"
            w={{ base:"80%", xl: "80%", md: "80%", xs: "10%", sm: "10%", lg: "80%" }}
          >
            <Carousel
              loop
              // withIndicators
              height={300}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              withControls={false}
            >
              <Carousel.Slide>
                <Image
                  fit="contain"
                  // mt={{ base: "40%", xl: "20%" }}
                  // w={{ lg: "400%", xl: "120%", base: "80%" }}
                  src="/masjid_petrokimia.webp"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  fit="contain"
                  // mt={{ base: "40%", xl: "20%" }}
                  // w={{ lg: "400%", xl: "120%", base: "80%" }}
                  src="/masjid_petrokimia.webp"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  fit="contain"
                  // mt={{ base: "40%", xl: "20%" }}
                  // w={{ lg: "400%", xl: "120%", base: "80%" }}
                  src="/masjid_petrokimia.webp"
                />
              </Carousel.Slide>
              {/* ...other slides */}
            </Carousel>
          </Container>
          {/* <Container mt="10px" ml={{xl:"50%", base:"0%"}} mr={{xl:"0%", lg:"30%", base:"0%"}}>
                <Text c="#FFD700" ta="center" fw={300} fz={{base:"12pt", xl:"18pt", lg:"20pt"}} ml={{base:"0%",lg:"40%", xl:"0%"}}>
                  Masjid Petrokimia
                </Text>
              </Container> */}
          <Container
            mt={{xl:"40px", lg:"40px", base:"-55px"}}
            ml={{ xl: "35%", lg: "0%", base: "0%" }}
            w="100%"
          >
            <Text
              c="#FFD700"
              ta="left"
              ml={{ base: "25%", lg: "33%", xl: "38%", md:"10%" }}
              fw={700}
              fz={{ xl: "28px", base: "19px", lg: "20pt" }}
            >
              Jadwal Imsakiyah <br />
            </Text>
            <Text
              pt={{ xl: "2%", base: "0%", lg: "2%" }}
              c="#FFD700"
              ta="left"
              ml={{ base: "27%", lg: "34%", xl: "41%", md:"10%" }}
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
                ml={{ lg: "35%", xl: "3%", md:"10%" }}
                ta="center"
                c="#FFD700"
                fz={{ xl: "21px", base: "15px" }}
              >
                Untuk Wilayah <b>Gresik</b>, <b>Surabaya</b>,<b>Sidoarjo</b>{" "}
                <br />
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
            <a
              href="https://www.instagram.com/petrokimiagresik_official?igsh=eGI5eHVscDhtNzJl&utm_source=qr"
              target="_blank"
            >
              <Image
                fit="contain"
                w={{ base: "20px", xl: "30px" }}
                ml={{ xl: "10%" }}
                c="white"
                src="/instagram.png"
              />
            </a>
            <Text ml="10px" mt={{base:"-6px", xl:"2px", lg:"2px"}} c="white" ta="center" fz={{xl:"12pt", base:"8pt"}}>
              petrokimiagresik
              _official
            </Text>
            <a href="https://petrokimia-gresik.com" target="_blank">
              <Image
                fit="contain"
                w={{ base: "20px", xl: "30px" }}
                ml="15px"
                src="/browser.png"
              />
            </a>
            <a href="https://petrokimia-gresik.com" target="_blank">
              <Text ml="10px" mt={{base:"-5px", xl:"2px", lg:"2px"}} c="white" ta="center" fz={{base:"8pt", xl:"12pt"}}>
                {" "}
                petrokimia-gresik.com
              </Text>
            </a>
            <a href="https://twitter.com/petrogresik" target="_blank">
              <Image fit="contain" w={{xl:"24px", base:"20px"}} ml="15px" src="/twitter.png" />
            </a>
            <a href="https://twitter.com/petrogresik" target="_blank">
              <Text ml="10px" mt={{base:"1px", xl:"0px", lg:"2px"}} c="white" ta="center" fz={{xl:"12pt", base:"8pt"}}>
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
  // </BackgroundImage>
  );
}
