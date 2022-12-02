import { useState } from "react";
import FlightCard from "../components/FlightCard";
import Header from "../components/Header";
import SearchBarWrapper from "../components/SearchBarWrapper";

const Search = ({ active, setActive }: any) => {
  // This page is for searcing flightes

  // this will get all flights
  const [Flights, setFlights] = useState([]);
  return (
    <div className="Search">
      <Header active={active} setactive={setActive} />
      <SearchBarWrapper setFlights={setFlights} />

      <div className="search_result_area mx-auto">
        {Flights.length > 0 && <h1>Available Flights</h1>}

        <div className="grid_search">
          {Flights.map((EachFlight, key) => (
            <FlightCard EachFlight={EachFlight} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Search;
