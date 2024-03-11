import { Grid, Box, Image, Container, Button, Card, Text, Flex, rem } from "@mantine/core";
// import Layout from "../components/layout";
// import { Container } from "postcss";
import Video from "./video.tsx"

export default function Page() {
  return (
    <div style={{backgroundColor:"blue", width:"100%"}}>
      <Grid>
        <Grid.Col span={6}>
          <Box>
              <Image src="/Petrokimia.png" w={{base: 100, sm: 100, lg: 200}}/>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Container ml={{base:"30%", sm:"70%", lg:"65%"}}>
              <Image src="/Petrokimia.png" w={{base: 100, sm: 100, lg: 200}} />
          </Container>
        </Grid.Col>
      </Grid>
      <Text size="64px" ta="center" c="#FFD700" fw={700} mt="3%">
        Marhaban Ya Ramadhan
      </Text>
      <Text ta="center" mt="2%" size="32px" c="#FFD700" fw={700}>
        Selamat menyambut datangnya <br/>
        Bulan Suci Ramadhan 1445H
      </Text>
      <Container align="center" mt="5%" c="red">
            <Video src="/ramadan-1445H.mp4" />
      </Container>
      <Text ta="center" mt="3%" c="#FFD700" fw={700} size="32px">
        Penetapan awal Ramadan 1445 H menunggu Sidang Isbat dari 
        <br/>
        Kementerian Agama
      </Text>
      <Flex
      mt="4%" 
      justify={{sm: 'center'}}
      gap={{base:'sm', sm:'lg'}}
      direction={{base:'column', sm:'row'}}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Flex>
    </div>
    // <Grid>
    //   <Grid.Col span={4}>1</Grid.Col>
    //   <Grid.Col span={4}>2</Grid.Col>
    //   <Grid.Col span={4}>3</Grid.Col>
    // </Grid>
  );
}

// Page.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
