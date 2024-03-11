import { MantineProvider, createTheme } from "@mantine/core";
import Layout from "../components/layout";
// core styles are required for all packages
import "@mantine/core/styles.css";

export default function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
