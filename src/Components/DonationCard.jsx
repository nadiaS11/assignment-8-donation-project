import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, card_bg, category, category_bg, image_link, text_bg, title } =
    donation;

  return (
    <div>
      <Link to={`/${id}`}>
        <div
          style={{
            backgroundColor: card_bg,
          }}
          className={`card card-compact h-full rounded-t-lg `}
        >
          <figure className="flex-grow">
            <img className="h-full" src={image_link} alt="" />
          </figure>
          <div className=" flex flex-col gap-5 my-4 mx-5 ">
            <h2
              style={{
                backgroundColor: category_bg,
                color: text_bg,
              }}
              className="w-1/2 rounded text-center font-medium  "
            >
              {category}
            </h2>
            <p
              style={{
                color: text_bg,
              }}
              className="flex-grow font-bold card-title"
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationCard;
