import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router";
export const Model = ({ handleOpen, open, GrabValues, passenger }: any) => {
  let navigate = useNavigate();
  {
    /* this is the main model after this confirmation seats will update and booking will be done */
  }

  const [BookingState, setBookingState] = useState<any>(null);
  const [button_title, setbutton_title] = useState<any>("Confirm Booking");
  useEffect(() => {
    // get the booking information user wants to book
    const BookingFlightProgress: any = window.sessionStorage.getItem(
      "BookingFlightProgress"
    );
    const BookingFlightProgressJSon = JSON.parse(BookingFlightProgress);
    setBookingState(BookingFlightProgressJSon);
  }, []);

  // update seats and call the api on click on final book button
  const UpdateSeats = (id: any, depatureAt: any, arriveAt: any) => {
    setbutton_title("Processing....");
    axios
      .post("http://localhost:8000/update-seats", {
        id: id,
        depatureAt: depatureAt,
        arriveAt: arriveAt,
        seats: passenger.length,
      })
      .then((res) => {
        console.log(res);

        setTimeout(() => {
          setbutton_title("Booking Done");
        }, 3000);

        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} className="Model">
        <DialogHeader>Booking Details</DialogHeader>
        <DialogBody divider>
          <div className="w-full">
            {/* this is very important because this is dynamic according to the passenger seats  */}
            {GrabValues.map((EachObj: any, key: any) => (
              <div className="details_grid">
                <h1>Passenger {key + 1}</h1>
                <div className="flex items-center  ">
                  <Typography variant="small">First Name: </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex gap-1 ml-2"
                  >
                    {EachObj.fname}
                  </Typography>
                </div>
                <div className="flex items-center ">
                  <Typography variant="small">Last Name: </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex gap-1 ml-2"
                  >
                    {EachObj.lname}
                  </Typography>
                </div>
                <div className="flex items-center  ">
                  <Typography variant="small">Airport: </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex gap-1 ml-2"
                  >
                    {EachObj.airport}
                  </Typography>
                </div>
                <div className="flex items-center  ">
                  <Typography variant="small">Purpose: </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex gap-1 ml-2"
                  >
                    {EachObj.Purpose}
                  </Typography>
                </div>
              </div>
            ))}

            {/* showing flight details  */}
            <div className="details_grid">
              <h1>Flight Details</h1>
              <div className="flex items-center  ">
                <Typography variant="small">Departure Time: </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex gap-1 ml-2"
                >
                  {BookingState?.formateDepartureTime}
                </Typography>
              </div>
              <div className="flex items-center ">
                <Typography variant="small">Arrival Time: </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex gap-1 ml-2"
                >
                  {BookingState?.arrivalDepartureTime}
                </Typography>
              </div>
              <div className="flex items-center  ">
                <Typography variant="small">Seats: </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex gap-1 ml-2"
                >
                  {passenger.length}
                </Typography>
              </div>
              <div className="flex items-center  ">
                <Typography variant="small">Currency: </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex gap-1 ml-2"
                >
                  {BookingState?.prices[0]["currency"]}
                </Typography>
              </div>

              <div className="flex items-center  ">
                <Typography variant="small">Total Price: </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex gap-1 ml-2"
                >
                  {BookingState?.prices[0]["adult"] * passenger.length}
                </Typography>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={(e) => {
              UpdateSeats(
                BookingState?.id,
                BookingState?.depatureAt,
                BookingState?.arriveAt
              );
            }}
          >
            <span>{button_title}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};
