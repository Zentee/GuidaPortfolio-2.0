import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HeadDetails from "@components/HeadDetails";

function Application({ Component, pageProps }) {
  return (
    <>
      <HeadDetails />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default Application;
