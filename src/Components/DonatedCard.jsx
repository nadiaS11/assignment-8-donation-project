import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedCard = ({ donation }) => {
  const {
    id,
    price,
    card_bg,
    category,
    category_bg,
    image_link,
    text_bg,
    title,
  } = donation;
  return (
    <div>
      <div
        style={{
          backgroundColor: card_bg,
          color: text_bg,
        }}
        className={`card md:card-side h-full rounded-t-lg `}
      >
        <figure className="md:w-1/2 w-full">
          <img className=" h-full" src={image_link} alt="" />
        </figure>
        <div className="px-5 gap-1 py-4 flex flex-col">
          <div className="flex-grow">
            <h3
              style={{
                backgroundColor: category_bg,
              }}
              className="w-2/4 rounded text-center text-lg font-semibold"
            >
              {category}
            </h3>
            <h2 className="text-2xl text-black font-bold">{title}</h2>
            <h4 className=" font-bold md:pb-10 text-xl">${price}.00</h4>
          </div>
          <div className="pt-2">
            <Link
              to={`/${id}`}
              style={{
                backgroundColor: text_bg,
              }}
              className="text-white font-semibold btn-md rounded-md p-2 text-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  donation: PropTypes.object,
};

export default DonatedCard;
