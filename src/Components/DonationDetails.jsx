import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Donation from "./Donation";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import DetailCard from "./DetailCard";

const DonationDetails = (props) => {
  const { id } = useParams();
  const donations = useLoaderData();

  const [donation, setDonation] = useState({});

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id === id);
    setDonation(findDonation);
  }, [id, donations]);

  return (
    <div>
      <DetailCard key={id} donation={donation}></DetailCard>
    </div>
  );
};

DonationDetails.propTypes = {};

export default DonationDetails;
