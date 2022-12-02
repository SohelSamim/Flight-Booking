import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main
      className="d-flex justify-content-center align-items-center"
      id="home"
    >
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1>Great Flights Great Life.</h1>
        <p>
          Plan and book your perfect Flights using our flights plan services.
          <br />
          we provide very good flights for trips and travels
        </p>
        <Link to="/search" className="btn bg-light">
          Search flights
        </Link>
      </div>
    </main>
  );
};
export default Main;
