import "@styles/globals.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HeadDetails from "@components/HeadDetails";

function Application({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Default background color
    let backgroundColor = "rgba(18, 18, 18, 1)";

    // Change background color for specific routes
    if (router.pathname === "/golem" || router.pathname === "/nano") {
      backgroundColor = "#FFFFFF"; // set your desired color for /golem
    }

    document.body.style.backgroundColor = backgroundColor;

    // Reset background color when the component unmounts or location changes
    return () => {
      document.body.style.backgroundColor = "rgba(18, 18, 18, 1)"; // reset to default
    };
  }, [router.pathname]); // This ensures the effect runs only when the path changes

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
