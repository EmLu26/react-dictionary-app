import React from "react";
import "./Antonyms";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div>
        <em> Antonyms: </em>
        <ul className="Antonyms">
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
