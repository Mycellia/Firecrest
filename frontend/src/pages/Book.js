import React from "react";
import ReactDOM from "react";
import { API_URL } from "../config/index";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Book() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [q, setQ] = useState("");
  const [searchParam] = useState([
    "id",
    "departing_airport",
    "arriving_airport",
    "arriving_gate",
    "departing_gate",
    "airline",
  ]);

  const [DAfilterParam, setDAFilterParam] = useState(["ALL"]);
  const [AAfilterParam, setAAFilterParam] = useState(["ALL"]);
  const [DGfilterParam, setDGFilterParam] = useState(["ALL"]);
  const [AGfilterParam, setAGFilterParam] = useState(["ALL"]);
  const [AfilterParam, setAFilterParam] = useState(["ALL"]);

  useEffect(() => {
    fetch("http://localhost:8000/flights/api")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //  function search(items) {
  //   return items.filter((item) => {
  //     if (item.departing_airport == DAfilterParam && item.arriving_airport == AAfilterParam) {
  //       return searchParam.some((newItem) => {
  //         return (
  //           item[newItem]
  //               .toString()
  //               .toLowerCase()
  //               .indexOf(q.toLowerCase()) > -1
  //                    );
  //                });
  //            } else if (DAfilterParam == "ALL" || AAfilterParam == 'ALL') {
  //                return searchParam.some((newItem) => {
  //                    return (
  //                        item[newItem]
  //                            .toString()
  //                            .toLowerCase()
  //                            .indexOf(q.toLowerCase()) > -1
  //                    );
  //                });
  //            }
  //        });
  //    }

  function setFlight() {}

  function search(items) {
    //Remove from filter search if criteria does not match
    return items.filter((item) => {
      var filterArray = [];

      console.log(filterArray);

      // if (item.departing_airport != DAfilterParam){
      //   const index = filterArray.indexOf("departing_airport");
      //   if (index > -1) {
      //   filterArray.splice(index, 1);
      //   }
      // }
      // if (item.arriving_airport != AAfilterParam){
      //   const index = filterArray.indexOf("arriving_airport");
      //   if (index > -1) {
      //   filterArray.splice(index, 1);
      //   }
      // }
      // if (item.departing_gate != DGfilterParam){
      //   const index = filterArray.indexOf("departing_gate");
      //   if (index > -1) {
      //   filterArray.splice(index, 1);
      //   }
      // }
      // if (item.arriving_gate != AGfilterParam){
      //   const index = filterArray.indexOf("arriving_gate");
      //   if (index > -1) {
      //   filterArray.splice(index, 1);
      //   }
      // }
      // if (item.airline != AfilterParam){
      //   const index = filterArray.indexOf("airline");
      //   if (index > -1) {
      //   filterArray.splice(index, 1);
      //   }
      // }

      if (item.departing_airport == DAfilterParam) {
        filterArray.push("departing_airport");
      }

      if (item.arriving_airport == AAfilterParam) {
        filterArray.push("arriving_airport");
      }
      if (item.departing_gate == DGfilterParam) {
        filterArray.push("departing_gate");
      }
      if (item.arriving_gate == AGfilterParam) {
        filterArray.push("arriving_gate");
      }
      if (item.airline == AfilterParam) {
        filterArray.push("airline");
      }

      var filterCriteria = "";
      //Create Filter Code Conditions
      filterArray.forEach((i) => {
        if (filterArray.indexOf(i) == 0) {
          filterCriteria += "item." + i;
        } else {
          filterCriteria += " && item." + i;
        }
        switch (i) {
          case "departing_airport":
            filterCriteria += " == DAfilterParam";
            break;
          case "arriving_airport":
            filterCriteria += " == AAfilterParam";
            break;
          case "departing_gate":
            filterCriteria += " == DGfilterParam";
            break;
          case "arriving_gate":
            filterCriteria += " == AGfilterParam";
            break;
          case "airline":
            filterCriteria += " == AfilterParam";
            break;
        }
      });

      console.log(filterCriteria);
      console.log(filterArray);
      console.log(eval(filterCriteria));
      if (eval(filterCriteria)) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else {
      }
    });
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="wrapper">
        <div className="">
          {/* <label htmlFor="search-form">
                            <input
                                placeholder="Search for..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                        </label> */}

          <div className="select">
            <strong> Departing Airport </strong>
            <select
              onChange={(e) => {
                setDAFilterParam(e.target.value);
              }}
              className="custom-select"
            >
              <option value="">None</option>
              <option value="London Heathrow">London Heathrow</option>
              <option value="London Gatwick">London Gatwick</option>
            </select>
            <span className="focus"></span>
          </div>

          <div className="select">
            <strong> Arriving Airports </strong>
            <select
              onChange={(e) => {
                setAAFilterParam(e.target.value);
              }}
              className="custom-select"
            >
              <option value="">None</option>
              <option value="Paris CDG">Paris CDG</option>
              <option value="New York JFK">JFK</option>
            </select>
            <span className="focus"></span>
          </div>
          <div className="select">
            <strong> Departing Gate </strong>
            <select
              onChange={(e) => {
                setDGFilterParam(e.target.value);
              }}
              className="custom-select"
            >
              <option value="">None</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="B3">B3</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
              <option value="C3">C3</option>
            </select>
            <span className="focus"></span>
          </div>
          <div className="select">
            <strong> Arriving Gate </strong>
            <select
              onChange={(e) => {
                setAGFilterParam(e.target.value);
              }}
              className="custom-select"
            >
              <option value="">None</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="B3">B3</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
              <option value="C3">C3</option>
            </select>
            <span className="focus"></span>
          </div>
          <div className="select">
            <strong> Airline </strong>
            <select
              onChange={(e) => {
                setAFilterParam(e.target.value);
              }}
              className="custom-select"
            >
              <option value="">None</option>
              <option value="1">Virgin Atlantic</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul>
          {search(items).map((item) => (
            <div class="card mt-3">
              <table>
                <tr>
                  <strong>Departing Airport:</strong>{" "}
                  <span>{item.departing_airport}</span>
                </tr>
                <tr>
                  <strong>Arriving Airport:</strong>{" "}
                  <span>{item.arriving_airport}</span>
                </tr>
                <tr>
                  <strong>Departing Gate:</strong>{" "}
                  <span>{item.departing_gate}</span>
                </tr>
                <tr>
                  <strong>Arriving Gate:</strong>{" "}
                  <span>{item.arriving_gate}</span>
                </tr>
                <tr>
                  <strong>Airline:</strong> <span>{item.airline_name}</span>
                </tr>
              </table>
              <Link
                class="button"
                to={{
                  pathname: "/checkout",
                }}
              >
                {" "}
                Book a seat for {item.departing_airport} to{" "}
                {item.arriving_airport}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
