/* eslint-disable react/prop-types */
// noinspection ES6PreferShortImport
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import { Footer, Navbar, Sidebar } from "../components"; // Adjusted imports

const Showcase = ({ Component, pageProps }) => (
  <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
    <div className="font-poppins bg-white dark:bg-stackup-dark min-h-screen">
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Showcase</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Component {...pageProps} />
          </div>
          <Footer />
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
