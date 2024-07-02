import Navbar from "../components/navbar";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

const Landing = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className="grid grid-cols-2">
        {" "}
        {/* Added gap-4 for spacing */}
        <div
          className="col-span-2 bg-cover bg-no-repeat bg-center h-[400px]"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="flex mt-10">
            <div className="grid grid-cols-1">
              <p className="text-[45px] font-extrabold ml-[10%]">Air-King</p>
              <p className="text-[20px] ml-[10%] text-left">
                Step into the timeless world of luxury timepieces with Rolex
                Watches
              </p>
            </div>
          </div>
        </div>
        {/* Grid part 2 */}
        <div className=" ">
          {" "}
          <img
            src={image2}
            alt=""
            className=" object-cover h-[300px] w-[100%] object-center"
          />
        </div>
        <div>
          <div className="flex mt-10">
            <div className="grid grid-cols-1">
              <p className="text-[45px] font-extrabold ml-[10%] text-left">
                Sailor
              </p>
              <p className="text-[20px] ml-[10%] text-left">
                Bremont sailing watches are robust, lightweight and highly
                reliable
              </p>
            </div>
          </div>
        </div>
        {/* Grid part3 */}
        <div className="">
          <div className="flex mt-10">
            <div className="grid grid-cols-1">
              <p className="text-[45px] font-extrabold ml-[10%] text-right">
                DeepSea
              </p>
              <p className="text-[20px] ml-[10%] text-right">
                Inspired by the experimental watch.
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          {" "}
          <img
            src={image3}
            alt=""
            className=" object-cover h-[300px] w-[100%] object-top"
          />
        </div>
        {/* Grid 4 */}
        <div className=" ">
          {" "}
          <img
            src={image4}
            alt=""
            className=" object-cover h-[300px] w-[100%] object-center"
          />
        </div>
        <div>
          <div className="flex mt-10">
            <div className="grid grid-cols-1">
              <p className="text-[45px] font-extrabold ml-[10%] text-left">
                Explore
              </p>
              <p className="text-[20px] ml-[10%] text-left">
                explore your future
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
