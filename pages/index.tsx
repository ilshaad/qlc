import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AccordianBox from "../components/AccordianBox";
import AllHeader from "../components/AllHeader";
import styles from "../styles/pages/Home.module.scss";
import { accordianData } from "../scripts/accordianData";
import { useEffect } from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  useEffect(() => {
    console.log(accordianData);
  });

  // collect accoridan data & loops through to return list to display
  const accordianList = () => {
    const li = [];

    for (let item of accordianData) {
      li.push(
        <li key={item.title}>
          <AccordianBox title={item.title} bodyOptions={item.allOptions} />
        </li>
      );
    }

    return li;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Queen&#39;s Lane Consultant</title>
        <meta name="description" content="QLC Frontend challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* breadcrumb nav header */}
      <Header />

      {/* header for all responsive design*/}
      <AllHeader />

      {/* main body */}
      <main className={styles.main}>
        {/* accordian bock with list options */}
        <ul>{accordianList()}</ul>
      </main>
    </div>
  );
};

export default Home;
