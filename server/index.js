const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  fs.readFile(path.join(__dirname, "flights.json"), "utf-8", (err, data) => {
    let DeparterDestination = req.body.DeparterDestination;
    let ArrivalDestination = req.body.ArrivalDestination;
    let DeparterDate = req.body.DeparterDate.split("T")[0];
    let ArrivalDate = req.body.ArrivalDate.split("T")[0];
    let seats = req.body.seats;
    let DataInJson = JSON.parse(data);
    let FilterArray = [];
    
    DataInJson.forEach((Eachelement) => {
      if (
        Eachelement.depatureDestination == DeparterDestination &&
        Eachelement.arrivalDestination == ArrivalDestination
      ) {
        Eachelement["itineraries"].forEach((Eachitineraries) => {
          let depatureAt = Eachitineraries.depatureAt.split("T")[0];
          let ArrivalAt = Eachitineraries.arriveAt.split("T")[0];
          if (
            DeparterDate == depatureAt &&
            ArrivalDate == ArrivalAt &&
            Eachitineraries.avaliableSeats >= seats
          ) {
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
    
    res.send(FilterArray);
  });
});

app.post("/update-seats", (req, res) => {
  fs.readFile(path.join(__dirname, "flights.json"), "utf-8", (err, data) => {
    let id = req.body.id;
    let DataInJson = JSON.parse(data);
    let FilterArray = [];
    DataInJson.forEach((Eachelement) => {
      
      if (Eachelement.flight_id == id) {
        Eachelement["itineraries"].forEach((Eachitineraries) => {
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

    let FilterJSon = JSON.stringify(FilterArray);
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
