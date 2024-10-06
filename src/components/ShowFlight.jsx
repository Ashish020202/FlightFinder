const ShowFlight = ({ flights }) => {
  return (
    <div className="w-full">
      {flights.length === 0 ? (
        <p className="text-gray-500 text-center">No flights found. Please search again.</p>
      ) : (
        flights.map((flight, index) => (
          <div
            key={index}
            className="bg-white p-9 mb-4 shadow-lg rounded-lg flex items-center justify-between border-black border-x-2"
          >
            <div className="flex items-center">
              <div className="flex">
                <div>
                <img className="w-20" src={flight.image} alt="" />
                </div>
                <div>
                <h4 className="text-xl text-gray-900">{flight.airline}</h4>
                <p className="text-sm mt-1">Number: {flight.flightNumber}</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-6">
              <p className="text-xl text-gray-700">Departure: {flight.departureTime}</p>
              <p className="text-xl text-gray-700">Arrival: {flight.arrivalTime}</p>
            </div>
            <div className="text-right flex">
              <h1 className="mt-2">Rs.</h1>
              <p className="text-2xl font-semibold text-red-700"> {flight.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowFlight;
