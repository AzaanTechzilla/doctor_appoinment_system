"use client";
import { Icons, finddocarray, hospitalarray } from "@/app/api/api";
import React, { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <header>
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4 flex-wrap px-2">
            <div className="logo">
              <svg
                style={{ width: "120px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1829.94 432.35"
              >
                <defs>
                  <style>
                    {`.cls-1-logo{fill:#00507a;}
            .cls-2-logo{fill:#fff;}
            .cls-3-logo{fill:#72cbd6;}`}
                  </style>
                </defs>
                <g id="Layer_logo_mobile" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="blue">
                      <path
                        className="cls-1-logo"
                        d="M217.65,432.35C97.48,432.39,0,335,0,214.84a217.58,217.58,0,0,1,63.76-154c86.55-83.37,224.29-80.79,307.66,5.75,81.17,84.27,81.17,217.64,0,301.91a216.12,216.12,0,0,1-153.77,63.81"
                      />
                      <path
                        className="cls-2-logo"
                        d="M327.11,313.67H266.57V207.19l-46.52,46.53-40.22-43,88.29-92h59Z"
                      />
                      <polygon
                        className="cls-3-logo"
                        points="105.19 313.67 156.41 313.67 156.41 188.19 174.94 206.66 209.92 171.82 156.89 118.8 139.81 118.8 120.47 118.68 105.19 118.68 105.19 313.67"
                      />
                      <path
                        className="cls-1-logo"
                        d="M509.16,117.06H556.5L609,201.49l52.48-84.43h47.35V316.72H665.18V186.37L609,271.65h-1.14l-55.62-84.43v129.5H509.16Z"
                      />
                      <path
                        className="cls-1-logo"
                        d="M825.17,115.63h40.5l85.57,201.09H905.32l-18.26-44.78H802.63l-18.25,44.78H739.6Zm46.21,117.52L844.85,168.4l-26.53,64.75Z"
                      />
                      <path
                        className="cls-1-logo"
                        d="M982,117.06h91.28c25.38,0,45.06,7.13,58.18,20.25,11.13,11.12,17.12,26.81,17.12,45.64v.57c0,32.23-17.4,52.48-42.79,61.89l48.78,71.31h-51.35l-42.78-63.89H1026v63.89H982Zm88.42,97c21.4,0,33.66-11.41,33.66-28.24v-.57c0-18.83-13.12-28.52-34.51-28.52H1026V214Z"
                      />
                      <path
                        className="cls-1-logo"
                        d="M1188.22,117.06h43.93v79h81v-79h43.93V316.72h-43.93V236.57h-81v80.15h-43.93Z"
                      />
                      <path
                        className="cls-1-logo"
                        d="M1473.43,115.63h40.5l85.57,201.09h-45.92l-18.26-44.78h-84.43l-18.25,44.78h-44.78Zm46.21,117.52-26.53-64.75-26.53,64.75Z"
                      />
                      <path
                        className="cls-1-logo"
                        d="M1630.28,117.06h47.35l52.48,84.43,52.48-84.43h47.35V316.72H1786.3V186.37l-56.19,85.28H1729l-55.62-84.43v129.5h-43.07Z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center ">
                <li className="inline-block relative group">
                  <button className=" text-primary flex items-center justify-between cursor-pointer bg-transparent px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
                    Find Doctors
                    <div className="px-2">
                      <Icons.down className="w-full h-auto" />
                    </div>
                  </button>
                  <ul className="absolute hidden group-hover:block bg-white rounded-lg w-50 shadow-xl">
                    {finddocarray?.map((doctor) => (
                      <li
                        key={doctor.id}
                        className=" px-4 py-3 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer"
                      >
                        {doctor.title}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="inline-block relative group">
                  <button className=" text-primary flex items-center justify-between cursor-pointer bg-transparent px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
                    Hospitals
                    <div className="px-2">
                      <Icons.down className="w-full h-auto" />
                    </div>
                  </button>
                  <ul className="absolute hidden group-hover:block bg-white rounded-lg w-50 shadow-xl">
                    {hospitalarray?.map((hospital) => (
                      <li
                        key={hospital.id}
                        className=" px-4 py-3 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer"
                      >
                        {hospital.hospital}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <button className="bg-transparent hover:bg-primary hover:text-white text-primary rounded outline-none py-2 px-4">
                    Surgeries
                  </button>
                </li>
                <li className="inline-block relative group">
                  <button className=" text-primary flex items-center justify-between cursor-pointer bg-transparent px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
                    Medicines
                    <div className="px-2">
                      <Icons.down className="w-full h-auto" />
                    </div>
                  </button>
                  <ul className="absolute hidden group-hover:block bg-white rounded-lg w-50 shadow-xl">
                    <li className=" px-4 py-3 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      All Medicines
                    </li>
                    <li className=" px-4 py-3 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      Medicines (Delivery)
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="bg-transparent hover:bg-primary hover:text-white text-primary rounded outline-none py-2 px-4">
                    Shop
                  </button>
                </li>
                <li className="inline-block relative group">
                  <button className=" text-primary flex items-center justify-between cursor-pointer bg-transparent px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
                    Labs
                    <div className="px-2">
                      <Icons.down className="w-full h-auto" />
                    </div>
                  </button>
                  <ul className="absolute hidden group-hover:block bg-white rounded-lg w-60 shadow-xl">
                    <li className=" px-4 py-3 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      Chughtai Lab
                    </li>
                    <li className=" px-4 py-3 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      Dr. Essa's Laboratory & Diagnostic Center
                    </li>
                    <li className=" px-4 py-3 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      Excel Labs
                    </li>
                    <li className=" px-4 py-3 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      All Labs
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="bg-transparent hover:bg-primary hover:text-white text-primary rounded outline-none py-2 px-4">
                    Forum
                  </button>
                </li>
                <li>
                  <button className="bg-transparent hover:bg-primary hover:text-white text-primary rounded outline-none py-2 px-4">
                    Join as Doctor
                  </button>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-center gap-2">
              <div className="px-4 py-2 w-15 bg-primary rounded-xl text-white">
                <Icons.call className="w-full h-auto" />
              </div>
              <button className="bg-transparent border border-primary hover:bg-primary hover:text-white text-primary rounded outline-none py-2 px-4">
                Login
              </button>
              <button
                onClick={toggleSidebar}
                className="md:hidden p-2 rounded border border-primary text-primary"
              >
                <Icons.menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold text-primary">Menu</h2>
        <button onClick={toggleSidebar}>
          <Icons.close className="w-6 h-6 text-primary" />
        </button>
      </div>

      {/* Sidebar Nav */}
      <nav className="p-4">
        <ul className="">
                <li className="inline-block relative group">
                  <button className=" text-primary flex items-center justify-between cursor-pointer bg-transparent px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
                    Find Doctors
                    <div className="px-2">
                      <Icons.down className="w-full h-auto" />
                    </div>
                  </button>
                  <ul className="absolute z-10 hidden group-hover:block bg-white rounded-lg w-50 shadow-xl">
                    {finddocarray?.map((doctor) => (
                      <li
                        key={doctor.id}
                        className=" px-4 py-2 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer"
                      >
                        {doctor.title}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="inline-block relative group">
                  <button className=" text-primary flex items-center justify-between cursor-pointer bg-transparent px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
                    Hospitals
                    <div className="px-2">
                      <Icons.down className="w-full h-auto" />
                    </div>
                  </button>
                  <ul className="absolute z-10 hidden group-hover:block bg-white rounded-lg w-50 shadow-xl">
                    {hospitalarray?.map((hospital) => (
                      <li
                        key={hospital.id}
                        className=" px-4 py-2 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer"
                      >
                        {hospital.hospital}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <button className="bg-transparent hover:bg-primary hover:text-white text-primary rounded-lg outline-none py-2 px-4">
                    Surgeries
                  </button>
                </li>
                <li className="inline-block relative group">
                  <button className=" text-primary flex items-center justify-between cursor-pointer bg-transparent px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
                    Medicines
                    <div className="px-2">
                      <Icons.down className="w-full h-auto" />
                    </div>
                  </button>
                  <ul className="absolute z-10 hidden group-hover:block bg-white rounded-lg w-50 shadow-xl">
                    <li className=" px-4 py-2 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      All Medicines
                    </li>
                    <li className=" px-4 py-2 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      Medicines (Delivery)
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="bg-transparent hover:bg-primary hover:text-white text-primary rounded-lg outline-none py-2 px-4">
                    Shop
                  </button>
                </li>
                <li className="inline-block relative group">
                  <button className=" text-primary flex items-center justify-between cursor-pointer bg-transparent px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
                    Labs
                    <div className="px-2">
                      <Icons.down className="w-full h-auto" />
                    </div>
                  </button>
                  <ul className="absolute z-10 hidden group-hover:block bg-white rounded-lg w-60 shadow-xl">
                    <li className=" px-4 py-2 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      Chughtai Lab
                    </li>
                    <li className=" px-4 py-2 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      Dr. Essa's Laboratory & Diagnostic Center
                    </li>
                    <li className=" px-4 py-2 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      Excel Labs
                    </li>
                    <li className=" px-4 py-2 font-bold text-primary rounded-lg hover:bg-gray-200 cursor-pointer">
                      All Labs
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="bg-transparent hover:bg-primary hover:text-white text-primary rounded-lg outline-none py-2 px-4">
                    Forum
                  </button>
                </li>
                <li>
                  <button className="bg-transparent hover:bg-primary hover:text-white text-primary rounded-lg outline-none py-2 px-4">
                    Join as Doctor
                  </button>
                </li>
              </ul>
      </nav>
    </div>
  );
};

export default Header;
