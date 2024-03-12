import Shalat from "../calendar/halaman";
import {
  fetchJakartaData,
  fetchSurabayaData,
  fetchGresikData,
  fetchJemberData,
  fetchDataCombined,
} from "../calendar/api";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    fetchDataCombined().then((resource) => {
      console.log(resource);
    });
  }, []);
  return (
    <>
      H
      <Shalat />
    </>
  );
}
