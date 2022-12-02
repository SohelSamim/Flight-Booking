import { useEffect, useState } from "react";
import BookingWrapper from "../components/BookingWrapper";
import { FormPer } from "../components/FormPer";
import Header from "../components/Header";
import { Button } from "@material-tailwind/react";
import { Model } from "../components/Model";
const Booking = ({ active, setActive }: any) => {
  const [passenger, setpassenger] = useState<any>([]);
  const [GrabValues, setGrabValues] = useState<any>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  // this is the main function which will help use to handle the form all information
  useEffect(() => {
    let Seats = window.sessionStorage.getItem("seats");
    let ArraySeats = [];
    let HandleValues = [];
    for (let i = 0; i < Number(Seats); i++) {
      ArraySeats.push(1);
      HandleValues.push({
        fname: "",
        lname: "",
        airport: "",
        purpose: "",
      });
    }
    setGrabValues(HandleValues);
    setpassenger(ArraySeats);
  }, []);

  return (
    <div>
      <Header active={active} setactive={setActive} />
      <BookingWrapper />
      {/*  Model show if user Confirm to booking to make reconfim */}
      <Model
        handleOpen={handleOpen}
        open={open}
        GrabValues={GrabValues}
        passenger={passenger}
      />
      <div
        className="search_result_area search_result_area_new mx-auto"
        style={{ paddingTop: 100 }}
      >
        {/* this is the form depend on pessenger seats size */}
        {passenger.map((EachPassenger: any, key: any) => (
          <FormPer
            key={key}
            id={key}
            GrabValues={GrabValues}
            setGrabValues={setGrabValues}
          />
        ))}

        <Button
          className="button"
          onClick={(e) => {
            setOpen(true);
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
export default Booking;
