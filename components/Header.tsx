// only shows on desktop responsive design
// basicall just show breadcrumb

import React from "react";
import { Container } from "react-bootstrap";

type Props = {};

export default function Header({}: Props) {
  return (
    <Container fluid className={`d-none d-md-block m-0 p-0`}>
      <nav>
        <ol>
          <li>iKarrow</li>
          <li>
            My Claims <span>iKarrow</span>
          </li>
          <li>June 2021 Claim</li>
        </ol>
      </nav>
      <div>iKqlcLogo</div>
    </Container>
  );
}
