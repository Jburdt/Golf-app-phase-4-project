import React, { useState } from 'react';

const TimeForm = () => {
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    
  };

  return (
    <form>
      <h2>Selecte a time to play at </h2>

        <div>
          <label htmlFor="ttime">Tee-Time:</label><br/>
            <input 
              type="time" 
              id="time"  
              name="time"
              value={time}
              onChange = { e => setTime(e.target.value)}
              required={true}
            />
        </div>
       <input type="submit" value="Book Tee-Time"/>
    </form>
  )
}

export default TimeForm;