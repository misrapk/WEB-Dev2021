import React from "react";

const Card = (props) => {
  const { name, role, imgUrl } = props;
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="players" src={imgUrl} />
      <div>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Card;
