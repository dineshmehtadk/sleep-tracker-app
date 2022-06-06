import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Exercise = (props) =>(
  
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+ props.exercise._id}>edit</Link> <button onClick={()=> props.deleteExercise(props.exercise._id)}>delete</button>
    </td>
    </tr>

)

function ExerciseList() {
  const [exercises, setExercises] = useState([])

  fetch('http://localhost:4000/exercises')
    .then(response => response.json())
        .then(data => {
            if(data.length > 0){
                
                setExercises(data)
            }
        });



  const deleteExercise = (id) =>{
    console.log(id)
    fetch("http://localhost:4000/exercises/"+id , 
    {method:"DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.text())
        .then((data) => console.log(data));


  }


  const exerciseList=()=>{
    return(
      exercises.map(currentExercise => {
        return< Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id} />
      })
      
    )
  
  }
  return (
    <div className="container">
      <div>ExerciseList</div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {exerciseList()}
        </tbody>
      </table>
    </div>
    
  )
}

export default ExerciseList