import React from "react";
import Card from "./Card";

const CardList = ({ players }) => {
  const cardComponenet = players.map((user, i) => {
    return (
      <Card
        key={i}
        id={players[i].id}
        name={players[i].name}
        role={players[i].role}
        imgUrl={players[i].imgUrl}
      />
    );
  });
  return <div>{cardComponenet};</div>;
};

export default CardList;
