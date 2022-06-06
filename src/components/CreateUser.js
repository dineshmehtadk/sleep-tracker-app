
import React, { useState } from 'react';

const CreateUser = ()=>{

  const [enteredUsername, setEnteredUsername] = useState('');


  const onSubmit= (e)=> {
    e.preventDefault();
      fetch("http://localhost:4000/users/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username : enteredUsername
        }),
      })
        .then((response) => response.text())
        .then((data) => console.log(data));
    };
  
    
  

    return (
      <div className="container">
        <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                onChange={(e) => setEnteredUsername(e.target.value)}
                
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }


export default CreateUser;