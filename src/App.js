
import './App.css';
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';

function App() {


  return (
  
      <Router forceRefresh>
      <Navbar/>
      <br/>
        <Route path="/" exact component={ExerciseList } />
        <Route path="/create" component={CreateExercise} />
        <Route path="/add" component={CreateUser} />
        <Route path="/edit/:id" 
        render={({ match }) => (
          <EditExercise id={match.params.id} />
        )}
        />
        
      
      </Router>

  );
}

export default App;
