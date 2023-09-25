import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
      <Link to={`/donation-details/${id}`}>
        <div
          style={{
            backgroundColor: card_bg,
          }}
          className={`card card-compact rounded-t-lg `}
        >
          <figure>
            <img className="w-64 h-40" src={image_link} alt="" />
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
      </Link>
    </div>
  );
};

DonationCard.propTypes = {};

export default DonationCard;
