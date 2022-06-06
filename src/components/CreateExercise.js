import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = ()=> {

    const [enteredUsername, setEnteredUsername] =  useState('');
    const [enteredDescription, setEnteredDescription] =  useState('')
    const [enteredDuration, setEnteredDuration] =  useState(0)
    const [enteredDate, setEnteredDate] =  useState(new Date())
    const [Users, setUsers]= useState([])
  
    fetch('http://localhost:4000/users')
    .then(response => response.json())
        .then(data => {
            if(data.length > 0){
                setUsers(data.map(user => user.username))
                
            }
        });


  const submitHandle =(e) => {
    e.preventDefault();

    fetch("http://localhost:4000/exercises/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         username : enteredUsername,
          description: enteredDescription,
          duration : enteredDuration,
          date : enteredDate
        }),
      })
        .then((response) => response.text())
        .then((data) => console.log(data));
  }

    return (
    <div className="container">
      <h3>Create New Exercise Log</h3>
      <form onSubmit={submitHandle}>
        <div className="form-group"> 
          <label>Username: </label>
          <select 
              required
              className="form-control"
              value={enteredUsername}
              onChange={(e)=>setEnteredUsername(e.target.value)}
              >
              {
                Users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
    
        
          
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              onChange={(e)=>setEnteredDescription(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              onChange={(e)=>setEnteredDuration(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
            selected={enteredDate}
            onChange={(date) => setEnteredDate(date)} />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }


export default CreateExercise;