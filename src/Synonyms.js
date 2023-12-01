import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <p>
        <em>Synonyms: </em>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </p>
    );
  } else {
    return null;
  }
}
