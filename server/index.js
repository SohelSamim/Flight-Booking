const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

// this is to get data from the api from front end
app.use(express.json());

// adding cors
app.use(cors());

// post api for search result

app.post("/", (req, res) => {
  fs.readFile(path.join(__dirname, "flights.json"), "utf-8", (err, data) => {
    // this is the data i am getting from the frontend as a request
    let DeparterDestination = req.body.DeparterDestination;
    let ArrivalDestination = req.body.ArrivalDestination;
    let DeparterDate = req.body.DeparterDate.split("T")[0];
    let ArrivalDate = req.body.ArrivalDate.split("T")[0];
    let seats = req.body.seats;

    // this is the data i am getting from the file as a request
    let DataInJson = JSON.parse(data);

    // array for the fiter
    let FilterArray = [];

    // now filter algorithm start
    DataInJson.forEach((Eachelement) => {
      // first ill check available destination equality
      if (
        Eachelement.depatureDestination == DeparterDestination &&
        Eachelement.arrivalDestination == ArrivalDestination
      ) {
        Eachelement["itineraries"].forEach((Eachitineraries) => {
          let depatureAt = Eachitineraries.depatureAt.split("T")[0];
          let ArrivalAt = Eachitineraries.arriveAt.split("T")[0];

          // then ill check available DeparterDate and ArrivalDate and seats
          if (
            DeparterDate == depatureAt &&
            ArrivalDate == ArrivalAt &&
            Eachitineraries.avaliableSeats >= seats
          ) {
            // now ill push
            // i am pusing id,route,daparture date formate and arrival date formate and after that complete object so that i can work easilty on front end
            FilterArray.push({
              id: Eachelement.flight_id,
              route: `${DeparterDestination} To ${ArrivalDestination}`,
              formateDepartureTime: `${
                Eachitineraries.depatureAt.split("T")[0]
              } - ${Eachitineraries.depatureAt.split("T")[1].split(".")[0]}`,

              arrivalDepartureTime: `${
                Eachitineraries.arriveAt.split("T")[0]
              } - ${Eachitineraries.arriveAt.split("T")[1].split(".")[0]}`,
              ...Eachitineraries,
            });
          }
        });
      }
    });

    // now send to the front end the filter result
    res.send(FilterArray);
  });
});
// this is for update the seats
app.post("/update-seats", (req, res) => {
  // getting data for filtering purpose
  fs.readFile(path.join(__dirname, "flights.json"), "utf-8", (err, data) => {
    let id = req.body.id;

    // converting into json

    let DataInJson = JSON.parse(data);
    let FilterArray = [];
    // filtering process start
    DataInJson.forEach((Eachelement) => {
      // first check flight id if true go on
      if (Eachelement.flight_id == id) {
        Eachelement["itineraries"].forEach((Eachitineraries) => {
          // then check and date and time of departure
          if (
            Eachitineraries.depatureAt.split("T")[0] ==
              req.body.depatureAt.split("T")[0] &&
            Eachitineraries.depatureAt.split("T")[1] ==
              req.body.depatureAt.split("T")[1]
          ) {
            Eachitineraries["avaliableSeats"] =
              Eachitineraries["avaliableSeats"] - req.body.seats;
          }
        });
      }

      FilterArray.push(Eachelement);
    });

    // after filter convert into string
    let FilterJSon = JSON.stringify(FilterArray);

    // then pass into the flights.json file
    fs.writeFile("flights.json", FilterJSon, (err) => {
      if (!err) {
        res.send({ message: "success Update Done" });
      } else {
        res.send({ message: "Error in Updates" });
      }
    });
  });
});

app.listen("8000", () => {
  console.log("Server running on port 8000");
});
