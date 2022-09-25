// resuable accordian component for each option box

import { useState } from "react";
import style from "../styles/components/AccordianBox.module.scss";

type Props = { title: String; min: number; bodyOptions: string[] };

export default function AccordianBox({ title, min, bodyOptions }: Props) {
  const {
    accordianBox,
    accordianH,
    accordianHeader,
    titleH,
    titleText,
    titleHclick,
    minH,
    closeArrow,
    openArrow,
    circle,
    bodyUl,
    bodyLi,
    optionsTextP,
    optionsText,
    liArrowParent,
    liArrow,
  } = style;

  const [option1, option2, option3] = bodyOptions;

  const [list, setList] = useState<boolean>(false);

  const openList = () => {
    setList(!list);
  };

  return (
    <div className={`${accordianBox}`}>
      {/* accordian header */}
      <div
        onClick={openList}
        className={`${accordianH} ${list ? accordianHeader : ""}`}
      >
        <div className={`${circle}  d-inline-block`}>&#9900;</div>
        <div className={`${titleH} d-inline`}>
          <div className={`${titleText} ${list ? titleHclick : ""}`}>
            {title}
          </div>
        </div>
        <div className={`${minH} ${list ? "" : "text-muted"} d-inline-block`}>
          {min}min
        </div>
        <div
          className={`${closeArrow} ${list ? openArrow : ""} d-inline-block`}
        >
          &#8250;
        </div>
      </div>

      {/* accordian list body */}
      <div>
        {list ? (
          <ul className={`${bodyUl}`}>
            <li className={`${bodyLi}`} key={option1}>
              <div className={`${circle}`}>&#9900;</div>
              {/* <div className={``}>{option1}</div> */}
              <div className={`${optionsTextP} d-inline`}>
                <div className={`${optionsText}`}>{option1}</div>
              </div>
              <div className={`${liArrowParent}`}>
                <div className={`${liArrow}`}>&#8250;</div>
              </div>
            </li>

            <li className={`${bodyLi}`} key={option2}>
              <div className={`${circle}`}>&#9900;</div>
              {/* <div>{option2}</div> */}
              <div className={`${optionsTextP} d-inline`}>
                <div className={`${optionsText}`}>{option2}</div>
              </div>
              <div className={`${liArrowParent}`}>
                <div className={`${liArrow}`}>&#8250;</div>
              </div>
            </li>

            <li className={`${bodyLi}`} key={option3}>
              <div className={`${circle}`}>&#9900;</div>
              {/* <div>{option3}</div> */}
              <div className={`${optionsTextP} d-inline`}>
                <div className={`${optionsText}`}>{option3}</div>
              </div>
              <div className={`${liArrowParent}`}>
                <div className={`${liArrow}`}>&#8250;</div>
              </div>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
