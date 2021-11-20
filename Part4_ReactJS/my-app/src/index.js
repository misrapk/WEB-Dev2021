import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import 'tachyons';
import {players} from './players';

ReactDOM.render(
  <div>
    <Card id={players[0].id} name={players[0].name} role={players[0].role} imgUrl={players[0].imgUrl}/>
    <Card id={players[1].id} name={players[1].name} role={players[1].role} imgUrl={players[1].imgUrl}/>
    <Card id={players[2].id} name={players[2].name} role={players[2].role} imgUrl={players[2].imgUrl}/>
  </div>,
    document.getElementById("root")
);


reportWebVitals();