// Header for all responsive design. But for desktop there will be and extra main header

import styles from "../styles/components/AllHeaders.module.scss";

type Props = {};

export default function AllHeader({}: Props) {
  const {
    header,
    juneHeading,
    arrowBox,
    arrow,
    badgeOne,
    badgeTwo,
    badgeP,
    badgePone,
    step3,
  } = styles;

  return (
    <header className={`${header} `}>
      <div className={`${step3} d-none d-md-block m-0`}>
        STEP 3 TECHNOLOGY LTD
      </div>

      {/* left arrow which I place in front the june heading */}
      <span
        className={`${arrowBox} bg-white rounded-circle align-top d-md-none`}
      >
        <span className={`${arrow} text-primary`}>&#129104;</span>
      </span>

      {/* june heading */}
      <h1 className={`${juneHeading} fw-bold`}>June 2021 Claim</h1>

      {/* blue badge (one) */}
      <div>
        <div className={`${badgeOne} rounded-3`}>
          <div className={`${badgeP} ${badgePone}`}>
            1 June 2020 &#62; 30 June 2021
          </div>
        </div>
      </div>

      <div>
        <div className={`${badgeTwo} rounded-3`}>
          <div className={`${badgeP}`}>1 Month, 14 Days, 11 Hours</div>
        </div>
      </div>
    </header>
  );
}
