import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const TimeForm = ({ addedTimes, user }) => {
  const [time, setTime] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/tee_times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ time, course_id: id }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((time) => {
          addedTimes(time);
          history.push("/courses");
        });
      } else {
        response.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  };

  return (
    <div
      id="time-select"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit} style={{ marginBottom: "350px" }}>
        <h2>Selecte a time to play!</h2>
        <div style={{ width: "350px", border: "solid", borderRadius: "5px" }}>
          <label htmlFor="ttime" style={{ margin: "2px" }}>
            Select a time:
          </label>
          <br />
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required={true}
            style={{ color: "red", margin: "5px" }}
          />
          <br />
        </div>
        <input
          type="submit"
          value="Book Tee-Time"
          style={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: "5px",
            marginTop: "5px",
          }}
        />
        <div>{errors}</div>
      </form>
    </div>
  );
};

export default TimeForm;
