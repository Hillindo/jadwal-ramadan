import { Button, Grid, ThemeIcon, Badge, Modal, Paper, Container, Flex, Image} from '@mantine/core';
import {IconPhoto} from "@tabler/icons-react"
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import Detail from './detail';


  export default function Home() {
      const days = Array.from({ length: 30 }, (_, index) => `day-${index + 1}`); // Buat array nama-nama gambar
      const [modalOpen, setModalOpen] = useState(false);
      const [selectedImage, setSelectedImage] = useState([]);
      const handleImageClick = (days: []) => {
          setSelectedImage(days);
          setModalOpen(true);
        };
      console.log(typeof(days))
      //   const [opened, { open, close }] = useDisclosure(false);
    return (
      <Container pos="static">
        <Flex justify="center" mt="40px" w={{base: "270px", xl:"450px", md:"280px", sm:"200px", xs:"200px"}}>
          <Grid pos="relative">
              {days.map((day, index) => (
              <Container w={{base:"45px", xl:"70px"}} style={{height: '70px', cursor: 'pointer'}} onClick={() => handleImageClick(day)}>
              <Image fit="cover" w={{base:"40px", xl:"70px", xs:"50px", sm:"50px", md:"50px", lg:"50px"}} src={`/day-image/${day}.webp`} alt={day}/>
              </Container>
          ))}
          </Grid>
        </Flex>
          <Modal opened={modalOpen} onClose={() => setModalOpen(false)} fullScreen radius={0}
          transitionProps={{ transition: 'fade', duration: 900 }} bg="green" xOffset="0px">
              <Detail data={selectedImage}/>
          {/* Isi modal dengan gambar yang lebih besar atau informasi tambahan */}
          {/* {selectedImage && (
          <img src={`/day-image/${selectedImage}.webp`} alt={selectedImage} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          )} */}
          </Modal>
      </Container>
  );
}