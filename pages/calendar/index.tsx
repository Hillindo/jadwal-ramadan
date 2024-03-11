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
        <Flex w="100%" ml={{xl:"10%",md:"25%", lg:"0%", xs:"100px"}} align="center" justify={{base: "center", xl:"right", md:"right", sm:"center", xs:"center", lg:"right"}}>
            <Image fit="contain"  w={{base: "70%" ,xl:"50%", md:"35%", lg:"30%", xs:"25%"}}src="/Petrokimia.png"/>
        </Flex>
      </Container>
          <Grid pt={{base:"2px", md:"100px", xl:"20px", lg:"180px"}}>
            <Grid.Col span={{base:12, xl:4, md:6}}>
              <Container pt={{xl:"5px", lg:"0px"}} ml={{xl:"55%", base:"15%"}} pb="10px" w={{xl:"50%", md:"50%", xs:"10%", sm:"10%", lg:"20%" }}>
                <Image fit="contain" mt={{base:"40%", xl:"0%"}} w={{lg:"400%",xl:"120%", base:"80%"}} src="/masjid_petrokimia.webp"/>
              </Container>
              <Container mt="10px" ml={{xl:"50%", base:"0%"}}>
                <Text c="#FFD700" ta="center" fw={300} fz={{base:"12pt", xl:"18pt", lg:"20pt"}} ml={{base:"0%",lg:"40%", xl:"0%"}}>
                  Masjid Petrokimia
                </Text>
              </Container>
              <Container mt="80px" ml={{xl:"35%"}} w="100%">
                <Text c="#FFD700" ta="center" ml={{base:"0%",lg:"40%", xl:"0%"}} fw={700} fz={{xl:"28px", base:"15px", lg:"20pt"}}>
                  Jadwal Imsakiyah <br/>
                </Text>
                <Text pt={{xl:"10%"}}c="#FFD700" ta="center" ml={{base:"0%",lg:"40%", xl:"0%"}} fw={300} fz={{xl:"28px", base:"15px", lg:"20pt"}}>
                  Ramadan 1445H
                </Text>
              </Container>
            </Grid.Col>
            <Grid.Col span={{base:12, md:6, xl:8}}>
              <Container pos="relative">
                <Flex pt={{ base: "10px", xl: "50px", lg:"5px" }} pb="10px" direction="column" align="center" w={{xl:"100%", xs:"100%", lg:"50%"}}>
                  <Text ml={{lg:"10%", xl:"3%"}} ta="center" c="#FFD700" fz={{xl:"21px", base:"15px"}}>
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
      <Container w="100%">
        <Flex direction="row" justify="center">
        <Image fit="contain" w={{base:"20px", xl:"30px"}} ml={{xl:"20%"}} c="white"src="/instagram.png"/>
        <Text ml="10px" mt="4px" c="white" ta="center"> Petrokimia</Text>
        <Image fit="contain" w={{base:"20px", xl:"30px"}} ml="15px" src="/twitter.png" />
        <Text ml="10px" mt="5px" c="white" ta="center"> Petrokimia</Text>
        </Flex>
      </Container>
      </Flex>
      <div style={{marginTop:"35px"}}><br/>

      </div>
      </Container>
    );
  }