import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Masukkan tag head yang Anda butuhkan di sini */}
          <meta name="description" content="Deskripsi halaman Anda" />
          <link rel="icon" href="/favicon.ico" />
          {/* Contoh tag head lainnya */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;