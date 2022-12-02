const BestPlaces = () => {
  return (
    <section className="offer_area py-5" id="features">
      <h1 className="text-center">Business Flights</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://images.unsplash.com/photo-1582133386089-8965baf1a83a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1783&q=80"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Stockholm to Oslo</p>
                <span className="badge badge-secondary">120$</span>
                <span
                  className="badge bg-warning"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="This is featured location"
                  style={{ color: "#000" }}
                >
                  Best
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Oslo to Stockholm</p>
                <span className="badge badge-secondary">220$</span>
                <span
                  className="badge bg-warning"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="This is featured location"
                  style={{ color: "#000" }}
                >
                  Best
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://images.unsplash.com/photo-1486012563054-a205a26e389b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Oslo to Amsterdam</p>
                <span className="badge badge-secondary">120$</span>
                <span
                  className="badge bg-warning"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="This is featured location"
                  style={{ color: "#000" }}
                >
                  Best
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://images.unsplash.com/photo-1628964178609-aec11c666040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Amsterdam to Oslo</p>
                <span className="badge badge-secondary">890$</span>
                <span
                  className="badge bg-warning"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="This is featured location"
                  style={{ color: "#000" }}
                >
                  Best
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BestPlaces;
