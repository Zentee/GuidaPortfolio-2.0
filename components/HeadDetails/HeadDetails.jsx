import Head from "next/head";
import favicon from "/img/favicon.ico";

function HeadDetails() {
  return (
    <Head>
      <title>Ana Cunha Portfolio</title>
      <link rel="icon" type="image/png" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
    </Head>
  );
}

export default HeadDetails;
