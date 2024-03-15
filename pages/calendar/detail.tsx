import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Grid,
  Container,
  Image,
  Text,
  Flex,
  Box,
  Paper,
  Group,
  BackgroundImage,
} from "@mantine/core";
import { fetchDataCombined } from "./api";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function Demo({ data, setModal }: any) {
  const route = useRouter();

  const handleClickThis = () => {
    setModal(false);
    // route.push("https://petro.hillindo-digital.com/");
  };
  const number = data.split("-")[1];
  const dataKota = ["Jakarta", "Surabaya", "Gersik", "Jember"];
  const formatGoogleCalendarDateTime = (dateTime: string) => {
    const formattedDateTime = dateTime.replace(/[-: ]/g, "");
    return `${formattedDateTime}00`;
  };
  const handleClick = (kota, time, desc, date = null) => {
    const startDate = date.split(" ")[0]; // Ambil tanggal dari date
    const startTime = formatGoogleCalendarDateTime(startDate + "T" + time);
    const endTime = formatGoogleCalendarDateTime(startDate + "T" + time);
    const eventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      desc
    )}&dates=${encodeURIComponent(
      startTime + "/" + endTime
    )}&location=${encodeURIComponent(kota)}`;

    window.open(eventUrl, "_blank");
    console.log(kota, time, desc);
  };
  const [datas, setDats] = useState([]);
  useEffect(() => {
    fetchDataCombined().then((resource) => {
      setDats(resource);
      // console.log(
      //   datas[0]
      // );
    });
  }, []);
  const page = parseInt(number);
  const dayImage = [
    "/day-detail/day-1.webp",
    "/day-detail/day-2.webp",
    "/day-detail/day-3.webp",
    "/day-detail/day-4.webp",
    "/day-detail/day-5.webp",
    "/day-detail/day-6.webp",
    "/day-detail/day-7.webp",
    "/day-detail/day-8.webp",
    "/day-detail/day-9.webp",
    "/day-detail/day-10.webp",
    "/day-detail/day-11.webp",
    "/day-detail/day-12.webp",
    "/day-detail/day-13.webp",
    "/day-detail/day-14.webp",
    "/day-detail/day-15.webp",
    "/day-detail/day-16.webp",
    "/day-detail/day-17.webp",
    "/day-detail/day-18.webp",
    "/day-detail/day-19.webp",
    "/day-detail/day-20.webp",
    "/day-detail/day-21.webp",
    "/day-detail/day-22.webp",
    "/day-detail/day-23.webp",
    "/day-detail/day-24.webp",
    "/day-detail/day-25.webp",
    "/day-detail/day-26.webp",
    "/day-detail/day-27.webp",
    "/day-detail/day-28.webp",
    "/day-detail/day-29.webp",
    "/day-detail/day-30.webp",
  ];
  const scheduleImage = [
    "/day-detail/jadwal-1.webp",
    "/day-detail/jadwal-2.webp",
    "/day-detail/jadwal-3.webp",
    "/day-detail/jadwal-4.webp",
    "/day-detail/jadwal-5.webp",
    "/day-detail/jadwal-6.webp",
    "/day-detail/jadwal-7.webp",
    "/day-detail/jadwal-8.webp",
    "/day-detail/jadwal-9.webp",
    "/day-detail/jadwal-10.webp",
    "/day-detail/jadwal-11.webp",
    "/day-detail/jadwal-12.webp",
    "/day-detail/jadwal-13.webp",
    "/day-detail/jadwal-14.webp",
    "/day-detail/jadwal-15.webp",
    "/day-detail/jadwal-16.webp",
    "/day-detail/jadwal-17.webp",
    "/day-detail/jadwal-18.webp",
    "/day-detail/jadwal-19.webp",
    "/day-detail/jadwal-20.webp",
    "/day-detail/jadwal-21.webp",
    "/day-detail/jadwal-22.webp",
    "/day-detail/jadwal-23.webp",
    "/day-detail/jadwal-24.webp",
    "/day-detail/jadwal-25.webp",
    "/day-detail/jadwal-26.webp",
    "/day-detail/jadwal-27.webp",
    "/day-detail/jadwal-28.webp",
    "/day-detail/jadwal-29.webp",
    "/day-detail/jadwal-30.webp",
  ];
  const selectedDayImage =
    dayImage[Math.min(Math.max(page - 1, 0), dayImage.length - 1)];
  const selectedScheduleImage =
    scheduleImage[Math.min(Math.max(page - 1, 0), scheduleImage.length - 1)];
  return (
  <BackgroundImage src="/background3.png" pr={{xl:"4%", lg:"1%", base:"0%"}} w={{xl:"100%"}}>
      <Container bg={{xl:"transparent",lg:"transparent", base:"#005E6A"}} w={{lg:"80%", xl:"100%"}}>
            <Container
              pos="relative"
              ml={{ xl: "30%", lg: "25%", base: "10%" }}
              mt={{ base: "0%", lg: "0%", xl: "0%" }}
            >
              <Flex
                gap={{ base: "3%" }}
                align="center"
                justify={{
                  base: "center",
                  xl: "left",
                  md: "right",
                  sm: "center",
                  xs: "center",
                  lg: "left",
                }}
              >
                <Image
                  onClick={handleClickThis}
                  fit="contain"
                  mt={{ base: "5%", xl: "5%", lg: "3%" }}
                  w={{ base: "30%", xl: "23%", md: "35%", lg: "20%", xs: "25%" }}
                  // w={{ base: "30%", xl: "25%", md: "35%", lg: "20%", xs: "25%" }}
                  src="/bumn.png"
                />
                <Image
                  onClick={handleClickThis}
                  fit="contain"
                  mt={{ base: "5%", xl: "5%", lg: "3%" }}
                  w={{ base: "30%", xl: "23%", md: "35%", lg: "20%", xs: "25%" }}
                  src="/Petrokimia.png"
                />
                <Image
                  onClick={handleClickThis}
                  fit="contain"
                  mt={{ base: "5%", xl: "5%", lg: "3%" }}
                  w={{ base: "30%", xl: "23%", md: "35%", lg: "20%", xs: "25%" }}
                  src="/pi.png"
                />
              </Flex>
            </Container>
            <Container w="100%">
              
              <Grid pt="20px" mr={{xl:"0%", lg:"0%", base:"0%"}}>
                <Grid.Col span={{ xl: 7, lg: 6, base: 12 }}>
                  <Container
                    mt={{ xl: "30%", lg: "30%", base: "5%" }}
                    mr={{ xl: "20%", lg: "20%" }}
                    ml={{ base: "15%", xl: "0%", lg: "0%" }}
                  >
                    {/* <Image
                      w={{ base: "0px", xl: "110%", lg: "100%" }}
                      src="/masjid_petrokimia.webp"
                    /> */}
                  </Container>
                </Grid.Col>
                {/* Menggeser Gambar Waktu Shalat */}
                <Grid.Col span={{ xl: 5, lg: 6, base: 12 }} ml={{xl:"80%", lg:"65%", base:"0%"}}>
                  <Container ml={{ xl: "22%", lg: "10%", base: "5%" }} w="100%">
                    <Image
                      w={{ xl: "80%", lg: "75%", base: "95%" }}
                      src={selectedDayImage}
                    />
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
                  <Container pb="10px" mt={{base:"10px", lg:"70px", xl:"10%"}} ml={{xl:"15%", lg:"-4%"}} w="100%">
                    <Text ta="center" c="#FFD700" fz={{xl:"18px"}}>
                      Untuk Wilayah <b>Gresik</b>, <b>Surabaya</b>, <b>Sidoarjo</b>,{" "}
                      <br />
                      (dan sekitarnya)
                    </Text>
                  </Container>
                  {/* UP/Down Gambar Waktu Shalat */}
                  <Container mt={{xl:"25%", base:"10px", lg:"10px"}} ml={{xl:"-3%"}} w="100%">
                    <Flex justify="center" direction={"column"} w={{lg:"85%", xl:"130%"}}>
                      <div
                        style={{ display: "flex", borderBottom: "3px solid yellow" }}
                      >
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            borderRadius: "11px 11px 2px 2px",
                            textAlign: "center",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            borderRadius: "15px 15px 0 0",
                            backgroundColor: "#B67352",
                            textAlign: "center",
                            fontSize: "14px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          JKT
                        </div>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            borderRadius: "15px 15px 0 0",
                            backgroundColor: "#B67352",
                            textAlign: "center",
                            fontSize: "14px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          SBY
                        </div>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            borderRadius: "15px 15px 0 0",
                            backgroundColor: "#B67352",
                            textAlign: "center",
                            fontSize: "14px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          GSK
                        </div>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            borderRadius: "15px 15px 0 0",
                            backgroundColor: "#B67352",
                            textAlign: "center",
                            fontSize: "14px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          SDA
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            backgroundColor: "#240A34",
                            textAlign: "center",
                            fontSize: "13px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          Imsak
                        </div>
                        {datas.map((item, index) => (
                          <div
                            style={{
                              cursor: "pointer",
                              width: "100px",
                              height: "45px",
                              backgroundColor: "#436850",
                              textAlign: "center",
                              fontSize: "13px",
                              color: "white",
                              fontWeight: "bold",
                              paddingTop: "10px",
                            }}
                            onClick={() => {
                              handleClick(
                                dataKota[index],
                                item.find(
                                  (data) =>
                                    data.date ==
                                    dayjs("2024-03-12")
                                      .add(number - 1, "days")
                                      .format("YYYY-MM-DD")
                                )?.imsak,
                                "imsak",
                                dayjs("2024-03-12")
                                  .add(number - 1, "days")
                                  .format("YYYY-MM-DD")
                              );
                            }}
                          >
                            {
                              item.find(
                                (data) =>
                                  data.date ==
                                  dayjs("2024-03-12")
                                    .add(number - 1, "days")
                                    .format("YYYY-MM-DD")
                              )?.imsak
                            }
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            backgroundColor: "#240A34",
                            textAlign: "center",
                            fontSize: "13px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          Subuh
                        </div>
                        {datas.map((item, index) => (
                          <div
                            style={{
                              cursor: "pointer",
                              width: "100px",
                              height: "45px",
                              backgroundColor: "#436850",
                              textAlign: "center",
                              fontSize: "13px",
                              color: "white",
                              fontWeight: "bold",
                              paddingTop: "10px",
                            }}
                            onClick={() => {
                              handleClick(
                                dataKota[index],
                                item.find(
                                  (data) =>
                                    data.date ==
                                    dayjs("2024-03-12")
                                      .add(number - 1, "days")
                                      .format("YYYY-MM-DD")
                                )?.subuh,
                                "subuh",
                                dayjs("2024-03-12")
                                  .add(number - 1, "days")
                                  .format("YYYY-MM-DD")
                              );
                            }}
                          >
                            {
                              item.find(
                                (data) =>
                                  data.date ==
                                  dayjs("2024-03-12")
                                    .add(number - 1, "days")
                                    .format("YYYY-MM-DD")
                              )?.subuh
                            }
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            backgroundColor: "#240A34",
                            textAlign: "center",
                            fontSize: "13px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          Dzuhur
                        </div>
                        {datas.map((item, index) => (
                          <div
                            style={{
                              cursor: "pointer",
                              width: "100px",
                              height: "45px",
                              backgroundColor: "#436850",
                              textAlign: "center",
                              fontSize: "13px",
                              color: "white",
                              fontWeight: "bold",
                              paddingTop: "10px",
                            }}
                            onClick={() => {
                              handleClick(
                                dataKota[index],
                                item.find(
                                  (data) =>
                                    data.date ==
                                    dayjs("2024-03-12")
                                      .add(number - 1, "days")
                                      .format("YYYY-MM-DD")
                                )?.dzuhur,
                                "dzuhur",
                                dayjs("2024-03-12")
                                  .add(number - 1, "days")
                                  .format("YYYY-MM-DD")
                              );
                            }}
                          >
                            {
                              item.find(
                                (data) =>
                                  data.date ==
                                  dayjs("2024-03-12")
                                    .add(number - 1, "days")
                                    .format("YYYY-MM-DD")
                              )?.dzuhur
                            }
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            backgroundColor: "#240A34",
                            textAlign: "center",
                            fontSize: "13px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          Ashar
                        </div>
                        {datas.map((item, index) => (
                          <div
                            style={{
                              cursor: "pointer",
                              width: "100px",
                              height: "45px",
                              backgroundColor: "#436850",
                              textAlign: "center",
                              fontSize: "13px",
                              color: "white",
                              fontWeight: "bold",
                              paddingTop: "15px",
                              borderStyle: "doted",
                            }}
                            onClick={() => {
                              handleClick(
                                dataKota[index],
                                item.find(
                                  (data) =>
                                    data.date ==
                                    dayjs("2024-03-12")
                                      .add(number - 1, "days")
                                      .format("YYYY-MM-DD")
                                )?.ashar,
                                "ashar",
                                dayjs("2024-03-12")
                                  .add(number - 1, "days")
                                  .format("YYYY-MM-DD")
                              );
                            }}
                          >
                            {
                              item.find(
                                (data) =>
                                  data.date ==
                                  dayjs("2024-03-12")
                                    .add(number - 1, "days")
                                    .format("YYYY-MM-DD")
                              )?.ashar
                            }
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            backgroundColor: "#240A34",
                            textAlign: "center",
                            fontSize: "10px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          Maghrib
                        </div>
                        {datas.map((item, index) => (
                          <div
                            style={{
                              cursor: "pointer",
                              width: "100px",
                              height: "45px",
                              backgroundColor: "#436850",
                              textAlign: "center",
                              fontSize: "13px",
                              color: "white",
                              fontWeight: "bold",
                              paddingTop: "15px",
                            }}
                            onClick={() => {
                              handleClick(
                                dataKota[index],
                                item.find(
                                  (data) =>
                                    data.date ==
                                    dayjs("2024-03-12")
                                      .add(number - 1, "days")
                                      .format("YYYY-MM-DD")
                                )?.maghrib,
                                "maghrib",
                                dayjs("2024-03-12")
                                  .add(number - 1, "days")
                                  .format("YYYY-MM-DD")
                              );
                            }}
                          >
                            {
                              item.find(
                                (data) =>
                                  data.date ==
                                  dayjs("2024-03-12")
                                    .add(number - 1, "days")
                                    .format("YYYY-MM-DD")
                              )?.maghrib
                            }
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            width: "100px",
                            height: "45px",
                            backgroundColor: "#240A34",
                            borderRadius: "0 0 15px 15px",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "white",
                            fontWeight: "bold",
                            paddingTop: "10px",
                          }}
                        >
                          Isya
                        </div>
                        {datas.map((item, index) => (
                          <div
                            style={{
                              cursor: "pointer",
                              width: "100px",
                              height: "45px",
                              backgroundColor: "#436850",
                              borderRadius: "0 0 15px 15px ",
                              textAlign: "center",
                              fontSize: "13px",
                              color: "white",
                              fontWeight: "bold",
                              paddingTop: "15px",
                            }}
                            onClick={() => {
                              handleClick(
                                dataKota[index],
                                item.find(
                                  (data) =>
                                    data.date ==
                                    dayjs("2024-03-12")
                                      .add(number - 1, "days")
                                      .format("YYYY-MM-DD")
                                )?.isya,
                                "isya",
                                dayjs("2024-03-12")
                                  .add(number - 1, "days")
                                  .format("YYYY-MM-DD")
                              );
                            }}
                          >
                            {
                              item.find(
                                (data) =>
                                  data.date ==
                                  dayjs("2024-03-12")
                                    .add(number - 1, "days")
                                    .format("YYYY-MM-DD")
                              )?.isya
                            }
                          </div>
                        ))}
                      </div>

                      {/* <Image w="350px" src={selectedScheduleImage} /> */}
                    </Flex>
                  </Container>
                  <Container mt="5%" w="100%" ml={{xl:"15%", lg:"-7%"}}>
                    <Text c={{xl:"#040303",lg:"#040303", base:"#FFD700"}} ta="center" fz="12pt" fw={500}>
                      Sumber: SIHAT/KEMENAG (Kementerian Agama RI) <br />
                      <br />
                      Petrokimia Gresik mengucapkan selamat menjalankan ibadah puasa
                    </Text>
                  </Container>
                </Grid.Col>
              </Grid>
            </Container>
            <Flex
              mt="50px"
              justify={{ sm: "center" }}
              gap={{ base: "sm", sm: "lg" }}
              direction={{ base: "column", sm: "row" }}
            >
            <Container w="100%">
              <Flex direction="row">
                <a
                  target="_blank"
                  href="https://www.instagram.com/petrokimiagresik_official?igsh=eGI5eHVscDhtNzJl&utm_source=qr"
                >
                  <Image fit="contain" w={{xl:"26px", base:"14px",lg:"20px"}} c="white" src="/instagram.png" mb={{lg:"100%"}}/>
                </a>
                <Text ml="10px" mt={{xl:"0px", base:"-10px", lg:"-1px"}} c="white" ta="center" fz={{xl:"12pt",lg:"11pt", base:"8pt"}} fw={800}>
                  {" "}
                  petrokimiagresik
                  _official
                </Text>
                <a target="_blank" href="https://petrokimia-gresik.com">
                  <Image fit="contain" w={{xl:"26px", base:"14px", lg:"20px"}} ml="15px" src="/browser.png" mb={{lg:"100%"}} />
                </a>
                <a target="_blank" href="https://petrokimia-gresik.com">
                  <Text ml="10px" mt={{xl:"0px", base:"-10px", lg:"-1%"}} c="white" ta="center" fz={{xl:"12pt",lg:"11pt", base:"8pt"}} fw={800}>
                    {" "}
                    petrokimia-gresik.com{" "}
                  </Text>
                </a>
                <a target="_blank" href="https://twitter.com/petrogresik">
                  <Image fit="contain" w={{xl:"26px", base:"14px", lg:"20px"}} ml="15px" src="/twitter.png" mb={{lg:"100%"}} />
                </a>
                <a target="_blank" href="https://twitter.com/petrogresik">
                  <Text ml="10px" mt={{xl:"0px", base:"-2px", lg:"-1%"}} c="white" ta="center" fz={{xl:"12pt",lg:"11pt", base:"8pt"}} fw={800}>
                    petrogresik{" "}
                  </Text>
                </a>
              </Flex>
            </Container>
            </Flex>
            <div style={{ marginTop: "10px" }}>
            <br />
            </div>
      </Container>
  </BackgroundImage>
  );
}
