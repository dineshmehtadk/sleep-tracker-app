import React, { useState, useEffect } from 'react';


import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const EditExercise = (props)=> {

    const [enteredUsername, setEnteredUsername] =  useState('');
    const [enteredDescription, setEnteredDescription] =  useState('')
    const [enteredDuration, setEnteredDuration] =  useState(0)
    const [enteredDate, setEnteredDate] =  useState(new Date())



    useEffect(()=>{
        fetch('http://localhost:4000/exercises/'+ props.id)
    .then(response => response.json())
     .then(data => {
        
        setEnteredUsername(data.username)
        setEnteredDescription(data.description)
        setEnteredDuration(data.duration)
        setEnteredDate(new Date(data.date))
        
    })
    },[props.id]) 


    const onChangeUsername =(e)=>{
        setEnteredUsername(e.target.value)
    }
    console.log(enteredUsername)

    const onChangeDescription =(e)=>{
        setEnteredDescription(e.target.value)
    }
    const onChangeDuration =(e)=>{
        setEnteredDuration(e.target.value)
    }

    const onChangeDate = (date)=>{
        setEnteredDate(date)

    }






  const submitHandle =(e) => {
    e.preventDefault();

    fetch("http://localhost:4000/exercises/update/"+props.id, {
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
      <h3>Edit Exercise Log</h3>
      <form onSubmit={submitHandle}>
        <div className="form-group"> 
          <label>Username: </label>
          <input 
          type="text"
          value={enteredUsername}
          required
          onChange={onChangeUsername}
          
          />
    
        
          
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              value={enteredDescription}
              className="form-control"
              onChange={onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              value={enteredDuration}
              className="form-control"
              onChange={onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
            selected={enteredDate}
            onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }


export default EditExercise;