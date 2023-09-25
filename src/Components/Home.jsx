import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const Home = () => {
  const donations = useLoaderData();
  console.log(donations);
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-[80vh] px-2 mb-10 container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {donations?.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
