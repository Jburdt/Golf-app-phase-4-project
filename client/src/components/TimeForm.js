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
          console.log(user); // DELETE ME
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
    // <form onSubmit={handleSubmit}>
    //   <h2>Selecte a time to play!</h2>
    //   <div>
    //     <label htmlFor="ttime">Tee-Time:</label>
    //     <br />
    //     <input
    //       type="time"
    //       id="time"
    //       name="time"
    //       value={time}
    //       onChange={(e) => setTime(e.target.value)}
    //       required={true}
    //     />
    //   </div>
    //   <input type="submit" value="Book Tee-Time" />
    //   <div>{errors}</div>
    // </form>

    <div
      id="time-select"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit} style={{ marginBottom: "300px" }}>
        <h2>Selecte a time to play!</h2>
        <div style={{ width: "350px", border: "solid", borderRadius: "5px" }}>
          <label htmlFor="ttime">Select a time:</label>
          <br />
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required={true}
            style={{ color: "red" }}
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
