"use client";
import { Icons } from "@/app/api/api";
import Image from "next/image";
import React, { useState } from "react";

interface UserProps {
  img: string;
  title: string;
}

const doctors = [
  "Dermatologist",
  "Gynecologist",
  "Psychiatrist",
  "Psychologist",
  "Urologist",
  "General Physician",
  "Gastroenterologist",
  "Pediatrician",
  "General Practitioner",
  "Nutritionist",
];
const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Hyderabad",
  "Gujranwala",
];

const SearchUser: React.FC<UserProps> = ({ img, title }) => {
  const [query, setQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<boolean>(false);

  // Filter doctors dynamically
  const filteredDoctors = doctors.filter((doc) =>
    doc.toLowerCase().includes(query.toLowerCase())
  );
  const filteredCity = cities.filter((filtercity) =>
    filtercity.toLowerCase().includes(city.toLowerCase())
  );

  const handleSelect = (doc: string) => {
    console.log("Selected doctor:", doc);
    setQuery(doc);
    setShowSuggestions(false);
  };
  const handleSelectCity = (city: string) => {
    console.log("Selected city:", city);
    setCity(city);
    setSelectedCity(false);
  };

  return (
    <div>
      <div className="container mx-auto py-4">
        <div className="flex items-center gap-3">
          <Image
            src={img}
            alt="User Image"
            className="bg-primary rounded-full"
            width={40}
            height={40}
          />
          <h1>Hello, {title}!</h1>
        </div>

        <p className="py-3 text-xl font-bold">Find the Best Doctor Near You </p>

        <div className="flex items-center justify-center gap-4">
          {/* City Input */}
          <div className="relative basis-[20%]">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onFocus={() => setSelectedCity(true)}
              onBlur={() => setTimeout(() => setSelectedCity(false), 200)} // small delay so clicks work
              placeholder="City..."
              className="border border-gray-300 rounded-md p-2 w-full px-8 focus:outline-primary"
            />
            <div className="absolute top-3 left-2">
              <Icons.location className="w-5 h-5 text-primary" />
            </div>
            <div className="absolute top-3 right-2">
              <Icons.down className="w-4 h-4 text-primary" />
            </div>
            {selectedCity && city && filteredCity.length > 0 && (
              <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-48 overflow-y-auto z-50">
                {filteredCity.map((city, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSelectCity(city)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}

            {/* No results */}
            {selectedCity && city && filteredCity.length === 0 && (
              <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg p-2 text-gray-500">
                No doctors found
              </div>
            )}
          </div>

          {/* Doctor Search Input */}
          <div className="relative basis-[40%]">
            <input
              type="text"
              placeholder="Search for Doctors..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // small delay so clicks work
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-primary"
            />
            <div className="absolute top-3 right-2">
              <Icons.search className="w-5 h-5 text-primary" />
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && query && filteredDoctors.length > 0 && (
              <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-48 overflow-y-auto z-50">
                {filteredDoctors.map((doc, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSelect(doc)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {doc}
                  </li>
                ))}
              </ul>
            )}

            {/* No results */}
            {showSuggestions && query && filteredDoctors.length === 0 && (
              <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg p-2 text-gray-500">
                No doctors found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
