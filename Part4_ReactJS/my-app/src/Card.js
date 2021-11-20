import React, { Fragment } from "react";

const Card = (props) => {
  const { name, role, imgUrl } = props;
  return (
    <Fragment>
      <h1>Indian Cricket Team</h1>
      <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="players" src={imgUrl} />
        <div>
          <h2>{name}</h2>
          <p>{role}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
