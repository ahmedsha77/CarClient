import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


const WorkoutCreate = (props) => {
  const [car, setCar] = useState('');
  const [year, setYear] = useState('');
  const [transmission, setTransmission] = useState('');
  const [type, setType] = useState('');
  const [city, setCity] = useState('');
  const [interior, setInterior] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.token)
    fetch('http://localhost:3000/api/car', {
      method: 'POST', 
      body: JSON.stringify( {car: car, year: year, transmission: transmission, type: type, city: city, interior: interior, color: color}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }) .then((res) => res.json())
    .then((carData) => {
        console.log(carData);
        setCar('');
        setYear('');
        setTransmission('');
        setType('');
        setCity('');
        setInterior('');
        setColor('');
        props.fetchCars();
    })
  }

  return(
    <>
      <h3>Create your car</h3>
      <Form>
      <FormGroup>
          <Label htmlFor="car"/>
          <Input type="select" name="car" value={car} onChange={(e) => setCar(e.target.value)}>
          <option></option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Lexus">Lexus</option>
          </Input>
          Car
        </FormGroup>
        <FormGroup>
          <Label htmlFor="year"/>
          <Input type="select" name="year" value={year} onChange={(e) => setYear(e.target.value)}>
          <option></option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </Input>
          Year
        </FormGroup>
        <FormGroup>
          <Label htmlFor="transmission"/>
          <Input type="select" name="transmission" value={transmission} onChange={(e) => setTransmission(e.target.value)}>
          <option></option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </Input>
          Transmission
        </FormGroup>
        <FormGroup>
          <Label htmlFor="type"/>
          <Input type="select" name="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option></option>
            <option value="Sports">Sports</option>
            <option value="Luxury">Luxury</option>
            <option value="Limited-Edition">Limited-Edition</option>
          </Input>
          Type
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city"/>
          <Input type="select" name="city" value={city} onChange={(e) => setCity(e.target.value)}>
          <option></option>
            <option value="Indianapolis">Indianapolis</option>
            <option value="Chicago">Chicago</option>
            <option value="Cleveland">Cleveland</option>
          </Input>
          Nearest City
        </FormGroup>
        <FormGroup>
          <Label htmlFor="interior"/>
          <Input type="select" name="interior" value={interior} onChange={(e) => setInterior(e.target.value)}>
          <option></option>
            <option value="Leather">Leather</option>
            <option value="Polyester">Polyester</option>
            <option value="Vinyl">Vinyl</option>
          </Input>
          Interior
        </FormGroup>
        <FormGroup>
          <Label htmlFor="color"/>
          <Input type="select" name="color" value={color} onChange={(e) => setColor(e.target.value)}>
          <option></option>
            <option value="Matte-Black">Matte-Black</option>
            <option value="Pearl-White">Pearl-White</option>
            <option value="Desert-Orange">Desert-Orange</option>
          </Input>
          Exterior Color
        </FormGroup>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>Click to Submit</Button>
      </Form>
    </>
  )
}

export default WorkoutCreate;
