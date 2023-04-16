import "../styles/Calendar.css";

function Calendar({ marked, setMarked }) {
  const todayOfTheWeek = () => {
    const day = new Date();
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[day.getDay()];
  };

  return (
    <div className="days-buttons-div">
      <button
        className={`day-button ${
          marked === "yesterday" ? "day-button-pressed" : null
        } `}
        onClick={() => setMarked("yesterday")}
      >
        yesterday
      </button>
      <button
        className={`day-button ${
          marked === "today" ? "day-button-pressed" : null
        } `}
        onClick={() => setMarked("today")}
      >
        today, {todayOfTheWeek()}
      </button>
      <button
        className={`day-button ${
          marked === "tomorrow" ? "day-button-pressed" : null
        } `}
        onClick={() => setMarked("tomorrow")}
      >
        tomorrow
      </button>
    </div>
  );
}

export default Calendar;
