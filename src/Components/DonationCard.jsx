import React from "react";
import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const {
    id,
    card_bg,
    category,
    category_bg,
    image_link,
    description,
    price,
    text_bg,
    title,
  } = donation;

  console.log(card_bg);
  return (
    <div>
      <div
        style={{
          backgroundColor: card_bg,
        }}
        className={`card card-compact rounded-lg cardBgClass`}
      >
        <figure>
          <img className=" h-40" src={image_link} alt="" />
        </figure>
        <div className="card-body">
          <h2
            style={{
              backgroundColor: category_bg,
              color: text_bg,
            }}
            className="w-2/4 rounded text-center font-medium text-sm"
          >
            {category}
          </h2>
          <p
            style={{
              color: text_bg,
            }}
            className=" font-bold"
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {};

export default DonationCard;
