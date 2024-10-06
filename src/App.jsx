import React, { useState } from 'react';
import SearchForm from './components/SearchForm'
import ShowFlight from './components/ShowFlight';
import mockFlights from './data.json'


const App = () => {
  const [flights, setFlights] = useState([]);

  const handleSearch = (searchData) => {
    console.log('Search data', searchData);

    const filteredFlights = mockFlights.filter(
      (flight) =>
        flight.departureCity.toLowerCase() === searchData.departureCity.toLowerCase() &&
        flight.destinationCity.toLowerCase() === searchData.destinationCity.toLowerCase()
    );

    setFlights(filteredFlights);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <SearchForm onSearch={handleSearch} />
      <ShowFlight flights={flights} />
    </div>
  );
};

export default App;
