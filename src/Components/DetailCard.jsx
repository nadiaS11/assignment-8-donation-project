import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DetailCard = ({ donation }) => {
  const { image_link, description, price, text_bg, title } = donation;
  const { id } = useParams();

  const handleDonate = (donation) => {
    const addToDonation = [];
    const checkDonation = JSON.parse(localStorage.getItem("donate"));
    if (!checkDonation) {
      addToDonation.push(donation);
      localStorage.setItem("donate", JSON.stringify(addToDonation));
    } else {
      const ifExists = checkDonation.find((donation) => donation.id === id);
      if (!ifExists) {
        addToDonation.push(...checkDonation, donation);
        localStorage.setItem("donate", JSON.stringify(addToDonation));
      } else {
        toast("You already have donated ");
      }
    }
    console.log(checkDonation);
    toast("Donation added successfully");
  };

  return (
    <div className=" my-10">
      <div className="space-y-4  lg:w-2/4 md:w-3/4 mx-auto   ">
        <div
          style={{
            backgroundImage: `url( ${image_link})`,
            backgroundRepeat: "no-repeat",
            height: "60vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded-t-md flex flex-col justify-end"
        >
          <div className="bg-[#0B0B0B80] bg-blend-overlay p-6">
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
        </div>
        <div className="space-y-3 px-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className=" ">{description}</p>
        </div>
      </div>
    </div>
  );
};

DetailCard.propTypes = {
  donation: PropTypes.object,
};

export default DetailCard;
