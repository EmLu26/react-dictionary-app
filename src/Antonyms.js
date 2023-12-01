import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <ul className="Antonyms">
        {props.antonyms.map(function (antonym, index) {
          return <li key={index}>{antonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
