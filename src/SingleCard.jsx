import React from "react";

const SingleCard = ({ card, choiceHandler, flipped, disabled }) => {
  const clickHandler = () => {
    if (!disabled) {
      choiceHandler(card);
      console.log(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          src="./img/cover.png"
          alt="card back"
          className="back"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};
export default SingleCard;
