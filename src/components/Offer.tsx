const Offer = () => {
  return (
    <section className="offer_area py-5" id="offers">
      <h1 className="text-center">Special Offers</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://cdn.pixabay.com/photo/2017/04/05/01/10/natural-history-museum-2203648_1280.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Natural History Museum London Interior Arch Stairs
                </p>
                <span className="badge badge-secondary">120$</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://cdn.pixabay.com/photo/2020/06/14/10/58/london-5297395_1280.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  London Sunset England Architecture City Bridge
                </p>
                <span className="badge badge-secondary">220$</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_1280.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Building River Bridge London Flood</p>
                <span className="badge badge-secondary">120$</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_1280.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Palace London Parliament Big Ben England
                </p>
                <span className="badge badge-secondary">890$</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://cdn.pixabay.com/photo/2019/07/27/17/56/london-underground-4367265_1280.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  London Underground Tube Transport Underground
                </p>
                <span className="badge badge-secondary">90$</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100"
                src="https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  National History Museum Blue Whale Skeleton
                </p>
                <span className="badge badge-secondary">370$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offer;
