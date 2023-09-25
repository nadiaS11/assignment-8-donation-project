import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const DonationDetails = () => {
  const { id } = useParams();
  const donations = useLoaderData();

  const [donation, setDonation] = useState({});

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id === id);
    setDonation(findDonation);
  }, [id, donations]);

  return (
    <div>
      <ToastContainer limit={1}></ToastContainer>
      <DetailCard key={id} donation={donation}></DetailCard>
    </div>
  );
};

DonationDetails.propTypes = {};

export default DonationDetails;
