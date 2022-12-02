import React from "react";

const Benefit = () => {
  return (
    <section
      className="offer_area Benefit"
      id="benefits"
      style={{ background: "rgba(70, 87, 240, 0.1)" }}
    >
      <h1 className="text-center">Our Benefit</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Flight Hotel Service</h1>
            <p>
              When it comes to travel costs, typically one of the biggest costs
              that eat up the funds is accommodation. And why shouldn’t it?
            </p>
            <p>
              Traveling can be tiring, and a good soft bed is the best way to
              end a leg of the journey. A luxury hotel or resort might be the
              final ingredient in your dream vacation. Maybe you’re planning a
              family or friends vacation and need the extra rooms.
            </p>
            <p>Good news!</p>
            <p>
              We are providing free rooms services in our flights travel package
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="w-100 rounded"
              src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefit;
