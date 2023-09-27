import { ToastContainer, toast } from "react-toastify";
import DonatedCard from "./DonatedCard";
import { useEffect, useState } from "react";

const Donation = () => {
  const storedData = localStorage.getItem("donate");
  const [checkDonation, setCheckDonation] = useState([]);

  useEffect(() => {
    const newDonation = storedData ? JSON.parse(storedData) : [];
    if (!newDonation.length) {
      toast("You haven't made any donation.");
    } else {
      setCheckDonation(newDonation);
    }
  }, [storedData]);

  console.log(checkDonation, "from donation");
  const [seeAll, setSeeAll] = useState(false);

  const sliced = !seeAll ? checkDonation?.slice(0, 4) : checkDonation;

  return (
    <div className="">
      <ToastContainer limit={1}></ToastContainer>
      <div className="container mx-auto pt-10 pb-5 grid lg:grid-cols-2 gap-5 px-5">
        {sliced?.map((donation, idx) => (
          <DonatedCard key={idx} donation={donation}></DonatedCard>
        ))}
      </div>
      <div className="mx-auto pb-10 text-center">
        <button
          onClick={() => setSeeAll(!seeAll)}
          className={`${
            checkDonation.length > 4 && !seeAll
              ? "btn bg-[#009444] text-white"
              : (checkDonation.length > 4 && seeAll) ||
                checkDonation.length <= 4
              ? "hidden"
              : "hidden "
          } `}
        >
          See All
        </button>
      </div>
    </div>
  );
};

Donation.propTypes = {};

export default Donation;
