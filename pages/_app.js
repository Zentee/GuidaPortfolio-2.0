import "@styles/globals.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HeadDetails from "@components/HeadDetails";

function Application({ Component, pageProps }) {
  const router = useRouter();
  let path = useRouter().pathname;
  let direction = "";

  useEffect(() => {
    // Default background color
    let backgroundColor = "rgba(18, 18, 18, 1)";

    switch (path) {
      case "/golem":
        direction = "/golem";
        break;
      case "/nano":
        direction = "/nano";
        break;
      case "/dash":
        direction = "/dash";
        break;
      case "/infraspeak":
        direction = "/infraspeak";
        break;
      case "/1global":
        direction = "/1global";
        break;
      case "/invisible":
        direction = "/invisible";
        break;
      case "/betterroaming":
        direction = "/betterroaming";
        break;
    }

    // Change background color for specific routes
    if (path === direction) {
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
