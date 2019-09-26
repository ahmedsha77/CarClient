import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const WorkoutEdit = (props) => {
  const [editCar, setEditCar] = useState(props.workoutToUpdate.car);
  const [editYear, setEditYear] = useState(props.workoutToUpdate.year);
  const [editTransmission, setEditTransmission] = useState(props.workoutToUpdate.transmission);
  const [editType, setEditType] = useState(props.workoutToUpdate.type);
  const [editCity, setEditCity] = useState(props.workoutToUpdate.city);
  const [editInterior, setEditInterior] = useState(props.workoutToUpdate.interior);
  const [editColor, setEditColor] = useState(props.workoutToUpdate.color);
  const workoutUpdate = (event, workout) => {
    event.preventDefault();
    fetch(`http://localhost:3000/api/car/${props.workoutToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({car: editCar, year: editYear, transmission: editTransmission, type: editType, city: editCity, interior: editInterior, color: editColor}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then((res) => {
        props.fetchCars();
        props.updateOff();
    })
  }
  return(
    <Modal isOpen={true}>
      <ModalHeader>Create a Car</ModalHeader>
      <ModalBody>
        <Form onSubmit={workoutUpdate}>
      <FormGroup>
            <Label htmlFor="car">Edit Car:</Label>
            <Input type="select" name="car" value={editCar} onChange={(e) => setEditCar(e.target.value)}>
          <option></option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Lexus">Lexus</option>
          </Input>
          Car
        </FormGroup>
        <FormGroup>
        <Label htmlFor="year">Edit Year:</Label>
            <Input type="select" name="year" value={editYear} onChange={(e) => setEditYear(e.target.value)}>
          <option></option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </Input>
          Year
        </FormGroup>
        <FormGroup>
        <Label htmlFor="transmission">Edit Transmission:</Label>
            <Input type="select" name="transmission" value={editTransmission} onChange={(e) => setEditTransmission(e.target.value)}>          <option></option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </Input>
          Transmission
        </FormGroup>
        <FormGroup>
        <Label htmlFor="type">Edit Type:</Label>
            <Input type="select" name="type" value={editType} onChange={(e) => setEditType(e.target.value)}>
          <option></option>
            <option value="Sports">Sports</option>
            <option value="Luxury">Luxury</option>
            <option value="Limited-Edition">Limited-Edition</option>
          </Input>
          Type
        </FormGroup>
        <FormGroup>
        <Label htmlFor="city">Edit City:</Label>
            <Input type="select" name="city" value={editCity} onChange={(e) => setEditCity(e.target.value)}>
          <option></option>
            <option value="Indianapolis">Indianapolis</option>
            <option value="Chicago">Chicago</option>
            <option value="Cleveland">Cleveland</option>
          </Input>
          Nearest City
        </FormGroup>
        <FormGroup>
        <Label htmlFor="interior">Edit Interior:</Label>
            <Input type="select" name="interior" value={editInterior} onChange={(e) => setEditInterior(e.target.value)}>
          <option></option>
            <option value="Leather">Leather</option>
            <option value="Polyester">Polyester</option>
            <option value="Vinyl">Vinyl</option>
          </Input>
          Interior
        </FormGroup>
        <FormGroup>
        <Label htmlFor="color">Edit Color:</Label>
            <Input type="select" name="color" value={editColor} onChange={(e) => setEditColor(e.target.value)}>
          <option></option>
            <option value="Matte-Black">Matte-Black</option>
            <option value="Pearl-White">Pearl-White</option>
            <option value="Desert-Orange">Desert-Orange</option>
          </Input>
          Exterior Color
        </FormGroup>
        <Button type="submit">Update the car!</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default WorkoutEdit;
