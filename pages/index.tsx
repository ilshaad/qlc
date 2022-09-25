import type { NextPage } from "next";
import Head from "next/head";
import AccordianBox from "../components/AccordianBox";
import AllHeader from "../components/AllHeader";
import Header from "../components/Header";
import { accordianData } from "../scripts/accordianData";
import styles from "../styles/pages/Home.module.scss";

const Home: NextPage = () => {
  const {
    indexComponent,
    container,
    mainAccordian,
    accordianUl,
    accordianLi,
    redCircleBackgroundParent,
    redCircleBackgroundChild,
    redCircleBackground,
    blueCircleBackgroundParent,
    blueCircleBackgroundChild,
    blueCircleBackground,
  } = styles;

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
    <div className={`${indexComponent}`}>
      <div className={container}>
        <Head>
          <title>Queen&#39;s Lane Consultant</title>
          <meta name="description" content="QLC Frontend challenge" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* breadcrumb nav header */}
        <Header />

        {/* header for all responsive design*/}
        <AllHeader />

        {/* main body. accordian list */}
        <main className={`${mainAccordian}`}>
          {/* accordian bock with list options */}
          <ul className={`${accordianUl} m-0 p-0`}>{accordianList()}</ul>
        </main>
      </div>

      <div className={`${redCircleBackgroundParent}`}>
        <div className={`${redCircleBackgroundChild}`}>
          <div className={`${redCircleBackground}`}></div>
        </div>
      </div>

      <div className={`${blueCircleBackgroundParent}`}>
        <div className={`${blueCircleBackgroundChild}`}>
          <div className={`${blueCircleBackground}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
