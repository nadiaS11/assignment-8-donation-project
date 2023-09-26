import { createContext, useContext, useEffect, useState } from "react";

const DonationContext = createContext();
export const useDonationContext = () => useContext(DonationContext);

//do not touch this part
import PropTypes from "prop-types";
import Banner from "./Banner";
import DonationCard from "./DonationCard";

const Home = () => {
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
        <DonationContext.Provider
          value={{ allDonations, searchValue, setSearchValue, handleSearch }}
        >
          <Banner></Banner>
        </DonationContext.Provider>
      </div>

      <div className=" mt-20 px-2 mb-10 container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allDonations?.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
