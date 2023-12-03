import React from "react";
import Example from "./Example";
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
        <Example example={props.meanings.example} />
        <small>
          <div>
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>
          <div>
            <Antonyms antonyms={props.meanings.antonyms} />
          </div>
        </small>
      </p>
    </div>
  );
}
