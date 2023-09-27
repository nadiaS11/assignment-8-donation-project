import DonatedCard from "./DonatedCard";
import { useState } from "react";

const Donation = () => {
  const checkDonation = JSON.parse(localStorage.getItem("donate"));
  console.log(checkDonation, "from donation");
  const [seeAll, setSeeAll] = useState(false);

  const sliced = !seeAll ? checkDonation?.slice(0, 4) : checkDonation;
  // console.log(sliced);
  return (
    <div className="">
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
