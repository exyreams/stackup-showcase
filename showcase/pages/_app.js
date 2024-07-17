// noinspection ES6PreferShortImport
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import { Footer, Navbar, Sidebar } from "../components"; // Adjusted imports

const Showcase = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="font-poppins bg-white">
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Showcase</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-grow p-4">
            <Component {...pageProps} />
          </div>
          <Footer className="p-4" />
        </div>
      </div>
    </div>
  </ThemeProvider>
);

Showcase.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default Showcase;
