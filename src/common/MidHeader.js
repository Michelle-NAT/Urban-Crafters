import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSolidShoppingBag, BiUser } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const MidHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { totalItems } = useSelector((state) => state.cart);
  
  return (
    <div>
      <div>
        <div className="p-4">
          <div className="w-full max-w-screen-lg mx-auto">
            <ul className="flex flex-col md:flex-row justify-between items-center">
              <li className="flex items-center justify-between w-full md:w-auto">
                <Link to="/" className="logo">
                  <img
                    src="./images/obsessions_ecom/obsession_logo.png"
                    alt="logo_img"
                    className="h-10 md:h-auto" // Adjust height for responsiveness
                  />
                </Link>

                <div className="hidden md:flex">
                  {navbar.slice(1, 4).map((link, key) => (
                    <Link
                      to={link.path}
                      key={key}
                      className="mr-2 text-base capitalize px-4 hover:text-red-600"
                    >
                      {link.nav}
                    </Link>
                  ))}
                </div>
              </li>
              <li className="flex items-center w-full md:w-auto mt-2 md:mt-0">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full p-2 border rounded-lg outline-none md:mr-5"
                />
                <Link
                  onClick={toggleSidebar}
                  className="relative text-gray-500 mr-5 text-2xl p-2 rounded-full border"
                >
                  <BiSolidShoppingBag />
                  <div className="absolute -top-1 -right-1 bg-red-500 rounded-full h-5 w-5 flex items-center justify-center">
                    <span className="text-white text-xs">{totalItems}</span>
                  </div>
                </Link>
                <Link className="relative text-gray-500 mr-5 text-2xl p-2 rounded-full border">
                  <BiUser />
                </Link>
              </li>
            </ul>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleSidebar} className="text-gray-500 text-2xl">
                {/* Icon for mobile menu */}
                <BiSolidShoppingBag />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => toggleSidebar()}
      />
    </div>
  );
};

export default MidHeader;
