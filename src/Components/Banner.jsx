import React from "react";
import PropTypes from "prop-types";

const Banner = () => {
  return (
    <div
      className="absolute w-screen z-0 top-0

    "
    >
      <div
        className="hero h-[80vh] "
        style={{
          backgroundImage: "url( banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="join">
              <div>
                <div>
                  <input
                    className="input text-[#0B0B0B66] input-bordered join-item"
                    placeholder="Search here"
                  />
                </div>
              </div>

              <div className="">
                <button className="btn border-[#FF444A] bg-[#FF444A] text-white join-item">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
