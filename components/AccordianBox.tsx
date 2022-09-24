// resuable accordian component for each option box

import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
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
    circle,
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
        <div className={`${minH} d-inline-block text-muted`}>{min}min</div>
        <div className={`${closeArrow} d-inline-block`}>&#8250;</div>
      </div>

      {/* accordian list body */}
      <div>
        {list ? (
          <ul>
            <li key={option1}>
              <span className={`${circle}`}>&#9900;</span>
              <div className={``}>{option1}</div>
              <span>iKarrow</span>
            </li>

            <li key={option2}>
              <span className={`${circle}`}>&#9900;</span>
              <div>{option2}</div>
              <span>iKarrow</span>
            </li>

            <li key={option3}>
              <span className={`${circle}`}>&#9900;</span>
              <div>{option3}</div>
              <span>iKarrow</span>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
//   return (
//     <div className={`${accordianBox}`}>
//       <Accordion className={`border border-0`} flash={false}>
//         <Accordion.Item eventKey="0" className={`border border-0`}>
//           <Accordion.Header className={`border border-0 bg-primary`}>
//             <span className={`${circle}`}>&#9900;</span>
//             <div>{title} </div>
//             <span>iKmin </span>
//             <span>iKarrow</span>
//           </Accordion.Header>
//           <Accordion.Body>
//             <ul>
//               <li key={option1}>
//                 <span className={`${circle}`}>&#9900;</span>
//                 <div>{option1}</div>
//                 <span>iKarrow</span>
//               </li>
//               <li key={option2}>
//                 <span className={`${circle}`}>&#9900;</span>
//                 <div>{option2}</div>
//                 <span>iKarrow</span>
//               </li>
//               <li key={option3}>
//                 <span className={`${circle}`}>&#9900;</span>
//                 <div>{option3}</div>
//                 <span>iKarrow</span>
//               </li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </div>
//   );
// }
