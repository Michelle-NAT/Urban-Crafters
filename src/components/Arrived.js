import { arriveItems } from "../data/Data";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Arrived = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <Heading heading={"Just Arrived"} />
        <div className="flex flex-col md:flex-row items-center mt-10">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <h1 className="font-semibold text-3xl">Online Store</h1>
            <p className="my-4">
              Join the Urban Crafters community today and embrace the art of handmade. Happy shopping!
            </p>
            <Link
              className="border rounded-full px-4 py-2 inline-block"
              to={"https://instagram.com"} // Updated link to be valid
              target="_blank" // Opens in a new tab
            >
              Check Our Instagram
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 w-full">
            {arriveItems.map((item, index) => (
              <div key={index}>
                <div className="">
                  <div
                    className={`relative rounded-3xl overflow-hidden ${index === 4 ? "fifth-image" : ""}`}
                  >
                    <img
                      src={item.img}
                      alt="img"
                      className="rounded-3xl hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 right-0 p-3 bg-white rounded-xl">
                      <div className="p-1 bg-yellow rounded-full text-white">
                        <FaInstagram />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrived;
