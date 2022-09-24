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
  const { container, blueBackground, mainAccordian, accordianUl, accordianLi } =
    styles;

  useEffect(() => {
    console.log(accordianData);
  });

  // collect accoridan data & loops through to return list to display
  const accordianList = () => {
    const li = [];

    for (let item of accordianData) {
      li.push(
        <li key={item.title} className={`${accordianLi}`}>
          <AccordianBox
            title={item.title}
            min={item.min}
            bodyOptions={item.allOptions}
          />
        </li>
      );
    }

    return li;
  };

  return (
    <div className={container}>
      <Head>
        <title>Queen&#39;s Lane Consultant</title>
        <meta name="description" content="QLC Frontend challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* breadcrumb nav header */}
      <Header />

      {/* <div className={`${blueBackground}`}></div> */}
      {/* header for all responsive design*/}
      <AllHeader />

      {/* main body. accordian list */}
      <main className={`${mainAccordian}`}>
        {/* accordian bock with list options */}
        <ul className={`${accordianUl} m-0 p-0`}>{accordianList()}</ul>
      </main>
    </div>
  );
};

export default Home;
