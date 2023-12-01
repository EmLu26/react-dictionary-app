import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <p>
        <em> Antonyms: </em>
        <ul className="Antonyms">
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </p>
    );
  } else {
    return null;
  }
}
