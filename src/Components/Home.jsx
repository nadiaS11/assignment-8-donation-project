import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const Home = () => {
  // const inputRef = useRef(null);
  // const donations = useLoaderData();

  const [allDonations, setAllDonations] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAllDonations(data));
  }, [searchValue, setSearchValue]);

  const handleSearch = () => {
    const filter = allDonations.filter(
      (donation) => donation.category.toLowerCase() == searchValue.toLowerCase()
    );
    console.log(filter);
    setAllDonations(filter);
  };

  return (
    <div>
      <div>
        <Banner></Banner>
        <div className="join absolute mt-10 left-6 md:left-36 lg:left-[40%]  md:mt-0  top-80  ">
          <div>
            <div>
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="input text-[#0B0B0B66] input-bordered join-item"
                placeholder="Search here"
              />
            </div>
          </div>

          <div className="">
            <button
              onClick={handleSearch}
              className="btn border-[#FF444A] bg-[#FF444A] text-white join-item"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[80vh] px-2 mb-10 container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allDonations?.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
