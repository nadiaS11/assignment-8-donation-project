import PropTypes from "prop-types";
import { toast } from "react-toastify";

const DetailCard = ({ donation }) => {
  const { image_link, description, price, text_bg, title } = donation;

  const handleDonate = (donation) => {
    const addToDonation = [];
    const checkDonation = JSON.parse(localStorage.getItem("donate"));
    if (!checkDonation) {
      addToDonation.push(donation);
      localStorage.setItem("donate", JSON.stringify(addToDonation));
    } else {
      addToDonation.push(...checkDonation, donation);
      localStorage.setItem("donate", JSON.stringify(addToDonation));
    }
    console.log(checkDonation);
    toast("donation added successfully");
  };

  return (
    <div className=" ">
      <div className="space-y-4  lg:w-2/4 md:w-3/4 mx-auto relative  mt-5">
        <img
          className="rounded-t-lg mx-auto w-full h-[400px] md:h-[60vh] "
          src={image_link}
          alt=""
        />
        <div className="bg-[#0B0B0B80] bg-blend-overlay absolute pl-4 w-full top-[11.2rem] md:top-[18.2rem] lg:top-[18.4rem]  py-5">
          <button
            onClick={() => handleDonate(donation)}
            style={{
              backgroundColor: text_bg,
            }}
            className="  text-white font-semibold px-2 py-1 rounded-md"
          >
            Donate: ${price}
          </button>
        </div>
        <div className="space-y-3 px-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

DetailCard.propTypes = {
  donation: PropTypes.object,
};

export default DetailCard;
