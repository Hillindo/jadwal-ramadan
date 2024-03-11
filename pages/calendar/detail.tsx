import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { Modal, Button, Grid, Container, Image, Text, Flex, Box, Paper, Group } from '@mantine/core';

export default function Demo({data} : {data : string}) {
    const number = data.split('-')[1]; 
    const page = parseInt(number);
    const dayImage = [
      "/day-detail/day-1.webp", "/day-detail/day-2.webp", "/day-detail/day-3.webp",
      "/day-detail/day-4.webp", "/day-detail/day-5.webp", "/day-detail/day-6.webp",
      "/day-detail/day-7.webp", "/day-detail/day-8.webp", "/day-detail/day-9.webp",
      "/day-detail/day-10.webp", "/day-detail/day-11.webp", "/day-detail/day-12.webp",
      "/day-detail/day-13.webp", "/day-detail/day-14.webp", "/day-detail/day-15.webp",
      "/day-detail/day-16.webp", "/day-detail/day-17.webp", "/day-detail/day-18.webp",
      "/day-detail/day-19.webp", "/day-detail/day-20.webp", "/day-detail/day-21.webp",
      "/day-detail/day-22.webp", "/day-detail/day-23.webp", "/day-detail/day-24.webp",
      "/day-detail/day-25.webp", "/day-detail/day-26.webp", "/day-detail/day-27.webp",
      "/day-detail/day-28.webp", "/day-detail/day-29.webp", "/day-detail/day-30.webp"
    ]
    const scheduleImage = [
      "/day-detail/jadwal-1.webp", "/day-detail/jadwal-2.webp", "/day-detail/jadwal-3.webp",
      "/day-detail/jadwal-4.webp", "/day-detail/jadwal-5.webp", "/day-detail/jadwal-6.webp",
      "/day-detail/jadwal-7.webp", "/day-detail/jadwal-8.webp", "/day-detail/jadwal-9.webp",
      "/day-detail/jadwal-10.webp", "/day-detail/jadwal-11.webp", "/day-detail/jadwal-12.webp",
      "/day-detail/jadwal-13.webp", "/day-detail/jadwal-14.webp", "/day-detail/jadwal-15.webp",
      "/day-detail/jadwal-16.webp", "/day-detail/jadwal-17.webp", "/day-detail/jadwal-18.webp",
      "/day-detail/jadwal-19.webp", "/day-detail/jadwal-20.webp", "/day-detail/jadwal-21.webp",
      "/day-detail/jadwal-22.webp", "/day-detail/jadwal-23.webp", "/day-detail/jadwal-24.webp",
      "/day-detail/jadwal-25.webp", "/day-detail/jadwal-26.webp", "/day-detail/jadwal-27.webp",
      "/day-detail/jadwal-28.webp", "/day-detail/jadwal-29.webp", "/day-detail/jadwal-30.webp",
    ]
    const selectedDayImage = dayImage[Math.min(Math.max(page - 1, 0), dayImage.length - 1)];
    const selectedScheduleImage = scheduleImage[Math.min(Math.max(page - 1, 0), scheduleImage.length - 1)];
    return (

    <Container style={{backgroundColor:"#005E6A"}} fluid>
      <Container pos="relative" ml={{xl:"30%", lg:"25%", base:"10%"}} mt={{base:"0%", lg:"0%", xl:"0%"}}>
        <Flex gap={{base:"3%"}} align="center" justify={{base: "center", xl:"left", md:"right", sm:"center", xs:"center", lg:"left"}}>
          <Image fit="contain" mt={{base:"5%", xl:"5%", lg:"3%"}} w={{base: "30%" ,xl:"23%", md:"35%", lg:"20%", xs:"25%"}}w={{base: "30%" ,xl:"25%", md:"35%", lg:"20%", xs:"25%"}}src="/bumn.png"/>
          <Image fit="contain" mt={{base:"5%", xl:"5%", lg:"3%"}} w={{base: "30%" ,xl:"23%", md:"35%", lg:"20%", xs:"25%"}} src="/Petrokimia.png"/>
          <Image fit="contain" mt={{base:"5%", xl:"5%", lg:"3%"}} w={{base: "30%" ,xl:"23%", md:"35%", lg:"20%", xs:"25%"}}src="/pi.png"/> 
          </Flex>
      </Container>
      <Container w="100%">
        <Grid pt="20px">
          <Grid.Col span={{xl:6, lg:6, base:12}}>
              <Container mt={{xl:"30%", lg:"30%", base:"5%"}} mr={{xl:"20%", lg:"20%"}} ml={{base:"15%", xl:"0%", lg:"0%"}}>
              <Image w={{base:"0px", xl:"110%", lg:"100%"}}src="/masjid_petrokimia.webp"/>
              </Container>
          </Grid.Col>
          <Grid.Col span={{xl:6, lg:6, base:12}}>
              <Container ml={{xl:"17%", lg:"15%", base:"5%"}} >
                  <Image w={{xl:"80%", lg:"75%", base:"95%"}}src={selectedDayImage} />
              </Container> 
              {/* <Container mt="12px">
                  <Flex direction="row" justify="center" gap="15px">
                      <Group bg="green">
                          <Box size="10px">
                              <Image w="40px" sizes="10px" src="/indonesia-flag.png"/>
                          </Box>
                          <Text fw={700} c="white" ta="center" mt="4px">
                              INDONESIA
                          </Text>
                      </Group>
                  </Flex>        
              </Container>  */}
              <Container pb="10px" mt="10px">
              <Text ta="center" c="#FFD700">
                Untuk Wilayah <b>DKI JAKARTA</b>, <b>MAKASSAR</b>, <br/>
                <b>JAYAPURA</b> (dan sekitarnya)
              </Text>
            </Container>
            <Container mt="10px">
              <Flex justify="center"> 
                <Image w="350px" src={selectedScheduleImage} />
              </Flex>
            </Container>
            <Container mt="5%">
              <Text c="#FFD700" ta="center">
                  Sumber: SIHAT/KEMENAG (Kementerian Agama RI) <br/><br/>
                  Petrokimia Gresik mengucapkan selamat menjalankan ibadah puasa
              </Text>
            </Container>
          </Grid.Col>
        </Grid>
      </Container>
      <Flex
      mt="50px" 
      justify={{sm: 'center'}}
      gap={{base:'sm', sm:'lg'}}
      direction={{base:'column', sm:'row'}}>
      <Container w="100%">
        <Flex direction="row">
        <Image fit="contain" w="30px" c="white"src="/instagram.png"/>
        <Text ml="10px" mt="4px" c="white" ta="center"> Petrokimia</Text>
        <Image fit="contain" w="30px" ml="15px" src="/twitter.png" />
        <Text ml="10px" mt="5px" c="white" ta="center"> Petrokimia</Text>
        </Flex>
      </Container>
      </Flex>
      <div style={{marginTop:"10px"}}><br/>

      </div>
    </Container>
    );
  }