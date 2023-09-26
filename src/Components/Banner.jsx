import { useDonationContext } from "./Home";

const Banner = () => {
  const { searchValue, setSearchValue, handleSearch } = useDonationContext();

  return (
    <div
      className="w-full z-0 mx-auto

    "
    >
      <div
        className="hero h-[60vh] bg-no-repeat  w-full mx-auto  "
        style={{
          backgroundImage: "url( banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-80 mx-auto"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mx-auto">
            <h1 className="text-xl md:text-5xl py-4 text-black font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="md:join  mx-auto">
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
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
