import React, {useState, useEffect} from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import WorkoutCreate from './CarMake';
import WorkoutTable from './CarDisplay';
import WorkoutEdit from './EditCar';
import car from '../Assets/bmw.png';

const WorkoutIndex = (props) => {
const [workouts, setWorkouts] = useState([]);
const [updateActive, setUpdateActive] = useState(false);
const [workoutToUpdate, setWorkoutToUpdate] = useState({});

  const fetchCars = () => {
    fetch('http://localhost:3000/api/car', {
      method: 'GET',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'Authorization': props.token
      })
    }) .then( (res) => res.json())
      .then((carData) => {
          setWorkouts(carData)
      })
  }

  useEffect(() => {
    fetchCars();
  }, [])


  const editUpdateWorkout = (workout) => {
    setWorkoutToUpdate(workout);
    console.log(workout);
  }
  
  const updateOn = () => {
    setUpdateActive(true);
  }
  
  const updateOff = () => {
    setUpdateActive(false);
  }

  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-2">Car Creator</h1>
          <p className="lead">
            A web app which allows you to customize any kind of car and save it
          </p>
        </Container>
      </Jumbotron>
      <img src={car}/>
      <Container>
        <Row>
        <Col md="3">
          <WorkoutCreate fetchCars={fetchCars} token={props.token}/>
        </Col>
        <Col md="9">
          <WorkoutTable log={workouts} editUpdateWorkout={editUpdateWorkout}
          updateOn={updateOn} fetchCars={fetchCars} token={props.token}/>
        </Col>
        {updateActive ? <WorkoutEdit workoutToUpdate={workoutToUpdate}
        updateOff={updateOff} token={props.token} fetchCars={fetchCars}/> : <></>}
      </Row>
        </Container>
    </div>
  );
};

export default WorkoutIndex;
