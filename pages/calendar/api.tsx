import React, { useEffect } from "react";

const date = [
  "2024-03-12",
  "2024-03-13",
  "2024-03-14",
  "2024-03-15",
  "2024-03-16",
  "2024-03-17",
  "2024-03-18",
  "2024-03-19",
  "2024-03-20",
  "2024-03-21",
  "2024-03-22",
  "2024-03-23",
  "2024-03-24",
  "2024-03-25",
  "2024-03-26",
  "2024-03-27",
  "2024-03-28",
  "2024-03-29",
  "2024-03-30",
  "2024-03-31",
  "2024-04-01",
  "2024-04-02",
  "2024-04-03",
  "2024-04-04",
  "2024-04-05",
  "2024-04-06",
  "2024-04-07",
  "2024-04-08",
  "2024-04-09",
  "2024-04-10",
];

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchCombinedData() {
  //mendapatkan angka bulan, hari, tahun
  const currentDate = new Date().toLocaleDateString();
  const parts = currentDate.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
}

// const response1 = await fetchData(`https://api.myquran.com/v2/sholat/jadwal/1301/2024/03`); //Jadwal Shalat Jakarta Maret
// const response2 = await fetchData(`https://api.myquran.com/v2/sholat/jadwal/1301/2024/04`); //Jadwal Shalat Jakarta April
// const response3 = await fetchData(`https://api.myquran.com/v2/sholat/jadwal/1638/2024/03`); //Jadwal Shalat Surabaya Maret
// const response4 = await fetchData(`https://api.myquran.com/v2/sholat/jadwal/1638/2024/04`); //Jadwal Shalat Surabaya April
// const response5 = await fetchData(`https://api.myquran.com/v2/sholat/jadwal/1606/2024/03`); //Jadwal Shalat Gresik Maret
// const response6 = await fetchData(`https://api.myquran.com/v2/sholat/jadwal/1606/2024/04`); //Jadwal Shalat Gresik April
// const response7 = await fetchData(`https://api.myquran.com/v2/sholat/jadwal/1607/2024/03`); //Jadwal Shalat Jember Maret
// const response8 = await fetchData(`https://api.myquran.com/v2/sholat/jadwal/1607/2024/04`); //Jadwal Shalat Jember April

async function fetchJakartaData() {
  try {
    // Melakukan kedua panggilan API secara bersamaan
    const [response1, response2] = await Promise.all([
      fetchData(`https://api.myquran.com/v2/sholat/jadwal/1301/2024/03`), // Jadwal Shalat Jakarta Maret
      fetchData(`https://api.myquran.com/v2/sholat/jadwal/1301/2024/04`), // Jadwal Shalat Jakarta April
    ]);

    // Menggabungkan hasil kedua panggilan API menjadi satu objek
    const jakartaData = {
      march: response1.data.jadwal.filter((data) => date.includes(data.date)), // Menyimpan hasil API Maret dalam properti 'march'
      april: response2.data.jadwal.filter((data) => date.includes(data.date)), // Menyimpan hasil API April dalam properti 'april'
    };

    return [...jakartaData.march, ...jakartaData.april];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Melempar error agar bisa ditangkap di tempat lain
  }
}

async function fetchSurabayaData() {
  try {
    // Melakukan kedua panggilan API secara bersamaan
    const [response1, response2] = await Promise.all([
      fetchData(`https://api.myquran.com/v2/sholat/jadwal/1638/2024/03`), // Jadwal Shalat Surabaya Maret
      fetchData(`https://api.myquran.com/v2/sholat/jadwal/1638/2024/04`), // Jadwal Shalat Surabaya April
    ]);

    // Menggabungkan hasil kedua panggilan API menjadi satu objek
    const surabayaData = {
      march: response1.data.jadwal.filter((data) => date.includes(data.date)), // Menyimpan hasil API Maret dalam properti 'march'
      april: response2.data.jadwal.filter((data) => date.includes(data.date)), // Menyimpan hasil API April dalam properti 'april'
    };

    return [...surabayaData.march, ...surabayaData.april];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Melempar error agar bisa ditangkap di tempat lain
  }
}

async function fetchGresikData() {
  try {
    // Melakukan kedua panggilan API secara bersamaan
    const [response1, response2] = await Promise.all([
      fetchData(`https://api.myquran.com/v2/sholat/jadwal/1606/2024/03`), // Jadwal Shalat Gresik Maret
      fetchData(`https://api.myquran.com/v2/sholat/jadwal/1606/2024/04`), // Jadwal Shalat Gresik April
    ]);

    // Menggabungkan hasil kedua panggilan API menjadi satu objek
    const gresikData = {
      march: response1.data.jadwal.filter((data) => date.includes(data.date)), // Menyimpan hasil API Maret dalam properti 'march'
      april: response2.data.jadwal.filter((data) => date.includes(data.date)), // Menyimpan hasil API April dalam properti 'april'
    };

    return [...gresikData.march, ...gresikData.april];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Melempar error agar bisa ditangkap di tempat lain
  }
}

async function fetchJemberData() {
  try {
    // Melakukan kedua panggilan API secara bersamaan
    const [response1, response2] = await Promise.all([
      fetchData(`https://api.myquran.com/v2/sholat/jadwal/1607/2024/03`), // Jadwal Shalat Gresik Maret
      fetchData(`https://api.myquran.com/v2/sholat/jadwal/1607/2024/04`), // Jadwal Shalat Gresik April
    ]);

    // Menggabungkan hasil kedua panggilan API menjadi satu objek
    const jemberData = {
      march: response1.data.jadwal.filter((data) => date.includes(data.date)), // Menyimpan hasil API Maret dalam properti 'march'
      april: response2.data.jadwal.filter((data) => date.includes(data.date)), // Menyimpan hasil API April dalam properti 'april'
    };

    return [...jemberData.march, ...jemberData.april];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Melempar error agar bisa ditangkap di tempat lain
  }
}

async function fetchDataCombined() {
  try {
    // Melakukan semua panggilan API secara bersamaan
    const [jakartaData, surabayaData, gresikData, jemberData] =
      await Promise.all([
        fetchJakartaData(),
        fetchSurabayaData(),
        fetchGresikData(),
        fetchJemberData(),
      ]);

    // Menggabungkan hasil dari empat panggilan API menjadi satu array
    const combinedData = [jakartaData, surabayaData, gresikData, jemberData];

    return combinedData;
    // console.log(combinedData);
  } catch (error) {
    console.error("Error fetching combined data:", error);
    throw error; // Melempar error agar bisa ditangkap di tempat lain
  }
}

export {
  fetchJakartaData,
  fetchSurabayaData,
  fetchGresikData,
  fetchJemberData,
  fetchDataCombined,
};
