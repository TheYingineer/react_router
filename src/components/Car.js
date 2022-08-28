import React from 'react'
import cars from '../cars.json'
import { useParams } from "react-router-dom"
import { Container, Paper, Chip } from "@mui/material";


// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const { id } = useParams();
    const foundCar = cars.find((car) => {
        return car.id == id;
    })
    console.log(foundCar);
    return (
        <Container maxWidth="sm" className="car-container">
        <Paper className="car-paper">
          <h2>{foundCar.Name}</h2>
          {Object.keys(foundCar).map((key, idx) => {
            return <Chip key={idx} label={`${key}: ${foundCar[key]}`}></Chip>;
          })}
        </Paper>
      </Container>
    )

}

export default Car