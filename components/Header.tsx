// only shows on desktop responsive design
// basicall just show breadcrumb

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import qlcLogo from "../public/qlcLogo.png";
import style from "../styles/components/Header.module.scss";

type Props = {};

export default function Header({}: Props) {
  const {
    header,
    headerRow,
    arrowBoxParent,
    arrowBox,
    arrow,
    qlcLogoS,
    muteClaim,
    greaterThan,
    juneDate,
  } = style;

  return (
    <Container fluid className={`${header} d-none d-md-block align-center`}>
      <Row className={`${headerRow} align-items-center h-100`}>
        <Col xs={1} className={``}>
          {/* arrow */}
          <div className={`${arrowBoxParent} d-inline-block`}>
            <span className={`${arrowBox} rounded-circle align-top`}>
              <span className={`${arrow} text-primary`}>&#129104;</span>
            </span>
          </div>
        </Col>

        <Col xs={9}>
          <div className={`${muteClaim} d-inline-block text-muted`}>
            My Claims
          </div>

          {/* greater than symbol */}
          <div className={`${greaterThan} d-inline-block`}>&#62;</div>

          <div className={`${juneDate} d-inline-block`}>June 2021 Claim</div>
        </Col>

        <Col xs={2} className={`text-end`}>
          <div className={`${qlcLogoS} d-inline-block`}>
            <Image src={qlcLogo} alt="qlc logo" width={40} height={40} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
