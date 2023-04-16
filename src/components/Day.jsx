import React, { useEffect } from "react";
import Seat from "./Seat";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../pages/firebase";
import { Table } from "../icons/icons";
import "../styles/Day.css";

import { initDate } from "./functions";

function Day({ date, setShowCongratsPopup, setReservationDetails }) {
  useEffect(() => {
    const initComp = async () => {
      const dateDoc = await getDoc(doc(db, "dates", date));
      if (dateDoc.exists()) {
        console.log("date exists");
      } else {
        initDate(date);
      }
    };
    initComp();
  });

  const seat0 = { id: "livingRoom1", key: 0 };

  const seats1 = [
    { id: "kitchen1", key: 1, reverse: false },
    { id: "kitchen2", key: 2, reverse: false },
  ];
  const seats2 = [
    { id: "kitchen3", key: 3, reverse: true },
    { id: "kitchen4", key: 4, reverse: true },
  ];
  return (
    <div>
      <h3 className="date-header">{date}</h3>
      <h4 className="livingroom-header">סלון</h4>
      <div className="mb">
        <Seat
          key={seat0.key}
          seat={seat0}
          date={date}
          reverse={seat0.reverse}
          livingRoom={true}
          setReservationDetails={setReservationDetails}
        />
      </div>
      <h4 className="livingroom-header">מטבח</h4>
      <div className="salon-div">
        <div className="chairs-row">
          {seats1.map((seat) => (
            <Seat
              key={seat.key}
              seat={seat}
              date={date}
              reverse={seat.reverse}
              setReservationDetails={setReservationDetails}
            />
          ))}
        </div>
        {Table}
        <div className="chairs-row">
          {seats2.map((seat) => (
            <Seat
              key={seat.key}
              seat={seat}
              date={date}
              reverse={seat.reverse}
              setShowCongratsPopup={setShowCongratsPopup}
              setReservationDetails={setReservationDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Day;
