import React from "react";

const Help = () => {
  return (
    <div className="container">
      <h2>Card Deck</h2>
      <p>
        The .card-deck className creates an{" "}
        <strong>equal height and width</strong> grid of cards. The layout will
        automatically adjust as you insert more cards.
      </p>
      <p>
        In this example we have added extra content to the first card, to make
        it taller. Notice how the other cards follow.
      </p>
      <p>
        <strong>Note:</strong> The cards are displayed vertically on small
        screens (less than 576px):
      </p>
      <div className="card-deck">
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the first card</p>
            <p className="card-text">Some more text to increase the height</p>
            <p className="card-text">Some more text to increase the height</p>
            <p className="card-text">Some more text to increase the height</p>
          </div>
        </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the second card</p>
          </div>
        </div>
        <div className="card bg-success">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the third card</p>
          </div>
        </div>
        <div className="card bg-danger">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the fourth card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
