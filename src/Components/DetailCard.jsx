import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DetailCard = ({ donation }) => {
  const { image_link, description, price, text_bg, title } = donation;

  return (
    <div className="container mx-auto ">
      <div className="space-y-4 relative">
        <img
          className="rounded-t-lg h-[50vh] container"
          src={image_link}
          alt=""
        />
        <div className="bg-[#0B0B0B80] bg-blend-overlay absolute pl-4 top-56 w-full py-5">
          <Link
            style={{
              backgroundColor: text_bg,
            }}
            className="  text-white font-semibold px-2 rounded-md"
          >
            Donate: ${price}
          </Link>
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

DetailCard.propTypes = {};

export default DetailCard;
