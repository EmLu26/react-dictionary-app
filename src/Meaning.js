import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>
        <strong> Definition: {props.meanings.definition} </strong>
        <br />
        <em> "{props.meanings.example}" </em>
        <small>
          <div>
            <em> Synonyms: </em>
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>
          <div>
            <em>Antonyms: </em>
            <Antonyms antonyms={props.meanings.antonyms} />
          </div>
        </small>
      </p>
    </div>
  );
}
