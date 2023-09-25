import React from "react";
import PropTypes from "prop-types";
import Donation from "./Donation";
import { useParams } from "react-router-dom";

const DonationDetails = (props) => {
  const id = useParams();

  return <div>Donation details here</div>;
};

DonationDetails.propTypes = {};

export default DonationDetails;
