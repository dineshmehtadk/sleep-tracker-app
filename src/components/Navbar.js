
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExerciseTrack</Link>
        
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-autio">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">ExerciseList</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/add" className="nav-link">Add User</Link>
                </li>
            </ul>
        </div>
  
      </nav>)

}

export default Navbar