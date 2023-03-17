import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TimeForm = () => {
  const [time, setTime] = useState('');
  const {id} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/tee_times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({time, course_id: id})
    })
    .then((res) => res.json())
    .then(data => console.log(data))
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Selecte a time to play at </h2>

        <div>
          <label htmlFor="ttime">Tee-Time:</label><br/>
            <input 
              type="time" 
              id="time"  
              name="time"
              value={time}
              onChange = {(e) => setTime(e.target.value)}
              required={true}
            />
        </div>
       <input type="submit" value="Book Tee-Time"/>
    </form>
  )
}

export default TimeForm;