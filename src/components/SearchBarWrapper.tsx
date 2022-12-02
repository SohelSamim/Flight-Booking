import { Card } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
const SearchBarWrapper = ({ setFlights }: any) => {
  //these are use states to grab the searching information from user
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [DeparterDestination, setDeparterDestination] = useState(null);
  const [ArrivalDestination, setArrivalDestination] = useState(null);
  const [Passengers, setPassengers] = useState<any>(null);
  const [Disable, setDisable] = useState(true);
  const [text_btn, settext_btn] = useState("Search Flights");
  useEffect(() => {
    // validation so that user cannot search empty input
    if (
      DeparterDestination != null &&
      ArrivalDestination != null &&
      Passengers != null
    ) {
      setDisable(false);
    }
  }, [DeparterDestination, ArrivalDestination, Passengers]);

  // main searching function
  const SearchFlights = (e: any) => {
    settext_btn("Searching....");
    e.preventDefault();
    let SearchData: any = {
      DeparterDestination: DeparterDestination,
      ArrivalDestination: ArrivalDestination,
      DeparterDate: startDate,
      ArrivalDate: endDate,
      seats: Passengers,
    };

    // storing seats
    window.sessionStorage.setItem("seats", Passengers);

    // calling api for searching and passing the important data
    axios
      .post("http://localhost:8000", SearchData)
      .then((res) => {
        setTimeout(() => {
          if (res["data"].length === 0) {
            setTimeout(() => {
              // after 2 sec change the button text
              settext_btn("Search Flights");
            }, 2000);
            // if not available then show No Flights Available
            settext_btn("No Flights Available");
          } else {
            window.scrollBy(0, 600);
            // if Flights Available then need to change the text to original position
            settext_btn("Search Flights");
          }
          // set  Available Flights we got from the api
          setFlights(res["data"]);
        }, 3000);
        console.log(res["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="SearchBarWrapper">
      <h1>Search Flights</h1>

      {/* thjis is the form to collection the searching result */}
      <Card className="w-full py-4 px-4 mt-5 container card_custom">
        <Select
          label="Departure destination"
          onChange={(value: any) => {
            setDeparterDestination(value);
          }}
        >
          <Option
            value="Stockholm"
            disabled={ArrivalDestination == "Stockholm"}
          >
            Stockholm
          </Option>
          <Option value="Oslo" disabled={ArrivalDestination == "Oslo"}>
            Oslo
          </Option>
          <Option
            value="Amsterdam"
            disabled={ArrivalDestination == "Amsterdam"}
          >
            Amsterdam
          </Option>
        </Select>
        <Select
          label="Arrival destination"
          onChange={(value: any) => {
            setArrivalDestination(value);
          }}
        >
          <Option
            value="Stockholm"
            disabled={DeparterDestination == "Stockholm"}
          >
            Stockholm
          </Option>
          <Option value="Oslo" disabled={DeparterDestination == "Oslo"}>
            Oslo
          </Option>
          <Option
            value="Amsterdam"
            disabled={DeparterDestination == "Amsterdam"}
          >
            Amsterdam
          </Option>
        </Select>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <DatePicker
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
        />
        <Select label="Trip">
          <Option>One way trip</Option>
          <Option>round trip</Option>
        </Select>
        <Select
          label="Passengers"
          onChange={(value: any) => {
            setPassengers(value);
          }}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>
        <Button className="button" disabled={Disable} onClick={SearchFlights}>
          {text_btn}
        </Button>
      </Card>
    </div>
  );
};
export default SearchBarWrapper;
