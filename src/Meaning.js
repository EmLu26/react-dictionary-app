import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <strong className="Definition">
          {" "}
          Definition: {props.meanings.definition}{" "}
        </strong>
        <div>
          <Example example={props.meanings.example} />
        </div>
        <small>
          <div>
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>
          <div>
            <Antonyms antonyms={props.meanings.antonyms} />
          </div>
        </small>
      </div>
    </div>
  );
}
