// Header for all responsive design. But for desktop there will be and extra main header

import React from "react";
import styles from "../styles/components/Allheader.module.scss";

type Props = {};

export default function AllHeader({}: Props) {
  const { blueBackground } = styles;

  return (
    <header>
      <div className={`${blueBackground} bg-primary text-white`}>
        <div>STEP 3 TECHNOLOGY LTD</div>

        <div>
          <span>iKarrow</span>
          <h1>June 2021 Claim</h1>
        </div>

        <div>
          <span>iKimage</span>
          <div>1 June 2020 &#62; 30 June 2021</div>
        </div>

        <div>1 Month, 14 Days, 11 Hours</div>
      </div>
    </header>
  );
}
