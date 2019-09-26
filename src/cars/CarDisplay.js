import React from 'react';
import {Table, Button} from 'reactstrap';
import '../cars/style.css';
const WorkoutTable = (props) => {
  const deleteWorkout = (car) => {
    fetch(`http://localhost:3000/api/car/${car.id}`, {
        method: 'DELETE', 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchCars())
  }

  
  const workoutMapper = () => {
    return props.log.map((log, index) => {
      return(
        <tr key={index}>
          <th scope="row">{log.id}</th>
          <td>{log.car}</td>
          <td>{log.year}</td>
          <td>{log.transmission}</td>
          <td>{log.type}</td>
          <td>{log.city}</td>
          <td>{log.interior}</td>
          <td>{log.color}</td>
          <td>
          <Button color="primary" onClick={() => {props.editUpdateWorkout(log); props.updateOn()}}>Update</Button>
            <Button color="warning" onClick={() => {deleteWorkout(log)}}>Delete</Button>
          </td>
        </tr>
      )
    })
  }

  return(
    <>
    <h3>Car History</h3>
    <hr/>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Car</th>
          <th>Year</th>
          <th>Transmission</th>
          <th>Type</th>
          <th>City</th>
          <th>Interior</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {workoutMapper()}
      </tbody>
    </Table>
    </>
  )
}

export default WorkoutTable;
