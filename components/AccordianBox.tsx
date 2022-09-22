// resuable accordian component for each option box

import React from "react";
import { Accordion } from "react-bootstrap";

type Props = { title: String; bodyOptions: string[] };

export default function AccordianBox({ title, bodyOptions }: Props) {
  const [option1, option2, option3] = bodyOptions;

  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span>iKcircle </span>
            <div>{title} </div>
            <span>iKmin </span>
            <span>iKarrow</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li key={option1}>
                <span>iKcircle </span>
                <div>{option1}</div>
                <span>iKarrow</span>
              </li>
              <li key={option2}>
                <span>iKcircle </span>
                <div>{option2}</div>
                <span>iKarrow</span>
              </li>
              <li key={option3}>
                <span>iKcircle </span>
                <div>{option3}</div>
                <span>iKarrow</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
