// Header for all responsive design. But for desktop there will be and extra main header

import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/components/Allheader.module.scss";
import calendar from "../public/calendar.jpg";

type Props = {};

export default function AllHeader({}: Props) {
  const {
    header,
    blueBackground,
    arrowBox,
    arrow,
    badges,
    badgeRows,
    badgeRowOne,
    badgeRowTwo,

    badgeOne,
    badgeTwo,
    step3,
  } = styles;

  return (
    <header className={`${header}`}>
      <div
        className={`${blueBackground} bg-primary text-white h-100 text-center`}
      >
        {/* <div className={`text-center `}> */}
        <div className={`${step3} d-none d-md-inline-block`}>
          STEP 3 TECHNOLOGY LTD
        </div>
        {/* </div> */}

        <span
          className={`${arrowBox} bg-white rounded-circle align-top d-md-none`}
        >
          <span className={`${arrow} text-primary`}>&#129104;</span>
        </span>

        <div className={`d-inline-block`}>
          <h1 className={`fw-bold`}>June 2021 Claim</h1>

          <div className={`${badgeOne} rounded-3 text-end`}>
            <span className={`text-start`}>
              <Image src={calendar} alt="calendar" width={15} height={15} />
              &#160;
            </span>
            <span className={`text-end`}>1 June 2020 &#62; 30 June 2021</span>
          </div>

          <div className={`${badgeTwo} rounded-3`}>
            1 Month, 14 Days, 11 Hours
          </div>
        </div>
      </div>
    </header>
  );
}
