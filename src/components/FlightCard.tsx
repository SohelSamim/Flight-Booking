import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const FlightCard = ({ EachFlight }: any) => {
  const [showmore, setshowmore] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(EachFlight);
  }, [EachFlight]);
  return (
    // This is flight cards and the content is dynamic getting from the api
    <Card className="w-full">
      <CardHeader className="relative h-28 flex card_header justify-center items-center">
        Fligthers
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {EachFlight?.route}
        </Typography>
        <div className="flex items-center justify-between py-2">
          <Typography variant="small">Depature At</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {EachFlight?.formateDepartureTime}
          </Typography>
        </div>
        <div className="flex items-center justify-between py-2">
          <Typography variant="small">Arrive At</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {EachFlight?.arrivalDepartureTime}
          </Typography>
        </div>
      </CardBody>
      <CardFooter divider className="py-3">
        {showmore && (
          <>
            <div className="flex items-center justify-between py-2">
              <Typography variant="small">Seats</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                {EachFlight?.avaliableSeats}
              </Typography>
            </div>
            <div className="flex items-center justify-between py-2">
              <Typography variant="small">Price Adult</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                {EachFlight?.prices[0]["adult"]}
              </Typography>
            </div>
            <div className="flex items-center justify-between py-2 ">
              <Typography variant="small">Price Children</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                {EachFlight?.prices[0]["child"]}
              </Typography>
            </div>
            <div className="flex items-center justify-between py-2 mb-2 ">
              <Typography variant="small">Currency</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                {EachFlight?.prices[0]["currency"]}
              </Typography>
            </div>
            <Button
              className="mb-2 book_button"
              onClick={(e) => {
                navigate("/Booking");

                window.sessionStorage.setItem(
                  "BookingFlightProgress",
                  JSON.stringify(EachFlight)
                );

                window.sessionStorage.setItem(
                  "BookingFlightProgress",
                  JSON.stringify(EachFlight)
                );
              }}
            >
              Book
            </Button>
          </>
        )}

        <Button
          onClick={(e) => {
            setshowmore(!showmore);
          }}
        >
          {showmore ? "Show Less" : "See More"}
        </Button>
      </CardFooter>
    </Card>
  );
};
export default FlightCard;
