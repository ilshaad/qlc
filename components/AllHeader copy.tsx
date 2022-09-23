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
  } = styles;

  return (
    <header className={`${header}`}>
      <div
        className={`${blueBackground} bg-primary text-white h-100 text-center`}
      >
        <div className={`d-none d-sm-block`}>STEP 3 TECHNOLOGY LTD</div>

        <Container className={`w-100 p-0 m-0`}>
          <Row className={`m-0`}>
            <Col xs={3} className={`ps-3`}>
              <span className={`${arrowBox} text-primary`}>
                <span className={`${arrow}`}>&#129104;</span>
              </span>
            </Col>
            <Col xs={9} className={`ps-0 text-start`}>
              <h1 className={`fw-bold`}>June 2021 Claim</h1>
            </Col>
          </Row>
        </Container>

        <Container
          className={`${badges} ${badgeOne} m-0 mt-1 mx-auto text-center`}
        >
          <Row className={`${badgeRows} ${badgeRowOne} mx-auto rounded-3`}>
            <Col xs={1} className={`text-end mx-auto m-0 p-0`}>
              <span className={`d-inline-block align-middle text-center`}>
                <Image src={calendar} alt="calendar" width={15} height={15} />
                &#160;
              </span>
            </Col>

            <Col xs={11} className={`text-start mx-auto m-0 p-0`}>
              <div className={`d-inline-block align-top`}>
                1 June 2020 &#62; 30 June 2021
              </div>
            </Col>
          </Row>
        </Container>

        <Container className={`${badges} ${badgeTwo} m-0 mx-auto`}>
          <Row className={`${badgeRows} ${badgeRowTwo} mx-auto rounded-3`}>
            <Col
              xs={{ span: 10, offset: 2 }}
              className={`text-start mx-auto m-0 p-0`}
            >
              <div className={`d-inline-block align-top`}>
                1 Month, 14 Days, 11 Hours
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}
