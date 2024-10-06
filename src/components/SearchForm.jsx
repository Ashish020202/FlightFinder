import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = ({ onSearch }) => {
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = {
      departureCity,
      destinationCity,
      departureDate,
      returnDate,
    };
    onSearch(searchData); 
  };

  return (
    <div className="bg-slate-300 p-6 shadow-lg rounded-lg mb-6">
      <form className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" onSubmit={handleSubmit}>
     
        <input
          type="text"
          value={departureCity}
          onChange={(e) => setDepartureCity(e.target.value)}
          placeholder="From: City or Airport"
          className="w-full sm:w-1/4 p-2 border rounded-lg"
        />

        <input
          type="text"
          value={destinationCity}
          onChange={(e) => setDestinationCity(e.target.value)}
          placeholder="To: City or Airport"
          className="w-full sm:w-1/4 p-2 border rounded-lg"
        />

        <div className="relative w-full sm:w-1/4">
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            dateFormat="MM/dd/yyyy"
            className="w-full p-2 border rounded-lg pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
          </svg>
        </div>

      
        <div className="relative w-full sm:w-1/4">
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="MM/dd/yyyy"
            className="w-full p-2 border rounded-lg pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="w-full sm:w-auto flex justify-center sm:justify-end items-center">
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-xl w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
