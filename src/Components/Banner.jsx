const Banner = () => {
  return (
    <div
      className="absolute w-full z-0 top-0

    "
    >
      <div
        className="hero h-[80vh] bg-no-repeat  w-full mx-auto  "
        style={{
          backgroundImage: "url( banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 mx-auto"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-5xl py-4 font-bold">
              I Grow By Helping People In Need
            </h1>
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
