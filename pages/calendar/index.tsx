import {Grid, Box, Image, Container, Button, Card, Text, Flex, rem, Paper} from "@mantine/core"
import Time from "./tanggal"
import { useState } from 'react';
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
      <Container pos={{base:"absolute", xl:"relative"}} pl={{base:"10px", sm:"20px", xs:"lg"}}>
        <Flex w="100%" ml={{xl:"900px", xs:"600px"}} align="center" justify={{base: "center", xl:"right", md:"right", sm:"center", xs:"center"}}>
            <Image fit="contain"  w={{base: "70%" ,xl:"300px", md:"100px", xs:"200px"}}src="/Petrokimia.png"/>
        </Flex>
      </Container>
          <Grid pt={{base:"2px", xl:"20px", lg:"20px"}}>
            <Grid.Col span={{base:12, md:6}}>
              <Container pt="110px" pb="10px" w={{xl:"50%", md:"50%", xs:"10%", sm:"10%", lg:"20%" }}>
                <Image fit="contain" src="/masjid_petrokimia.webp"/>
              </Container>
              <Container mt="10px">
                <Text c="#FFD700" ta="center" fw={700} size="22px">
                  Masjid Petrokimia
                </Text>
              </Container>
              <Container mt="80px">
                <Text c="#FFD700" ta="center" fw={700} size="28px">
                  Jadwal Imsakiyah <br/>
                  Ramadan 1445H
                </Text>
              </Container>
            </Grid.Col>
            <Grid.Col span={{base:12, md:6}}>
              <Container pos="relative">
                <Flex pt={{ base: "20px", md: "50px" }} pb="10px" direction="column" align="center" w={{xl:"100%", xs:"50%"}}>
                  <Text ta="center" c="#FFD700" size="21px">
                    Untuk Wilayah <b>DKI JAKARTA</b>, <b>MAKASSAR</b>, <br/>
                    <b>JAYAPURA</b> (dan sekitarnya)
                  </Text>
                  <Time />
                </Flex>
              </Container>  
            </Grid.Col>
          </Grid>
          <Flex
      mt="70px" 
      justify={{sm: 'center'}}
      gap={{base:'sm', sm:'lg'}}
      direction={{base:'column', sm:'row'}}>
      <Container w="160px">
        <Flex direction="row">
        <Image fit="contain" w="30px" c="white"src="/instagram.png"/>
        <Text ml="10px" mt="4px" c="white" ta="center"> Petrokimia</Text>
        <Image fit="contain" w="30px" ml="15px" src="/twitter.png" />
        <Text ml="10px" mt="5px" c="white" ta="center"> Petrokimia</Text>
        </Flex>
      </Container>
      </Flex>
      <div style={{marginTop:"57px"}}><br/>

      </div>
      </Container>
    );
  }