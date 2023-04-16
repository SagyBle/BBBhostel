import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Day from "./Day";
import "../styles/Booking.css";
import Popup from "./Popup";

function Booking() {
  const getDate = (offset) => {
    let day = new Date();
    day.setDate(day.getDate() + offset);
    const dd = String(day.getDate()).padStart(2, "0");
    const mm = String(day.getMonth() + 1).padStart(2, "0");
    const yy = String(day.getFullYear()).slice(-2);
    return `${dd}.${mm}.${yy}`;
  };

  const [yesterday, setYesterday] = useState(null);
  const [today, setToday] = useState(null);
  const [tomorrow, setTomorrow] = useState(null);

  const [marked, setMarked] = useState("init");

  const [showCongratsPopup, setShowCongratsPopup] = useState(true);
  const [reservationDetails, setReservationDetails] = useState({
    date: "",
    seatID: "",
    userName: "",
  });

  useEffect(() => {
    setYesterday(getDate(-1));
    setToday(getDate(0));
    setTomorrow(getDate(1));
  }, []);

  return (
    // <div className="google-login-div">
    <div>
      <Calendar marked={marked} setMarked={setMarked} />
      {marked === "yesterday" && (
        <Day
          date={yesterday}
          setShowCongratsPopup={setShowCongratsPopup}
          setReservationDetails={setReservationDetails}
        />
      )}
      {marked === "today" && (
        <Day
          date={today}
          setShowCongratsPopup={setShowCongratsPopup}
          setReservationDetails={setReservationDetails}
        />
      )}
      {marked === "tomorrow" && (
        <Day
          date={tomorrow}
          setShowCongratsPopup={setShowCongratsPopup}
          setReservationDetails={setReservationDetails}
        />
      )}
      {marked === "init" && (
        <h4 className="choose-date-seat-header">
          בחרו תאריך ואת הכיסא בו תרצו לשבת{" "}
        </h4>
      )}
      {/* {showCongratsPopup && (
        <Popup
          title="ברכות!"
          text={`congrats ${reservationDetails.userName}! you reserved ${reservationDetails.seatID} for ${reservationDetails.date}`}
          handleConfirm={() => {
            setShowCongratsPopup(false);
          }}
        />
      )} */}
    </div>
  );
}
// handleConfirm={} handleCancel={} keepCancelButton={}
export default Booking;
