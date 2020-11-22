import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { VehicleTypeDropDown } from "../Components/VehicleTypeDropDown";
import { CarInputs } from "../Components/CarInputs";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: 150,
    margin: 10,
  },
  button: {
    width: 150,
    margin: 10,
    backgroundColor: "#4267B2",
    color: "white",
  },
}));

const CreateCar = ({ AddCar }) => {
  const classes = useStyles();
  const [VehicleType, setVehicleType] = React.useState("");
  const [Model, setModel] = React.useState("");
  const [Make, setMake] = React.useState("");
  const [Engine, setEngine] = React.useState("");
  const [Doors, setDoors] = React.useState("");
  const [Wheels, setWheels] = React.useState("");
  const [BodyType, setBodyType] = React.useState("");

  return (
    <div style={{ margin: "auto" }}>
      <h3>Add Car</h3>
      <FormControl className={classes.formControl}>
        <VehicleTypeDropDown
          VehicleType={VehicleType}
          setVehicleType={setVehicleType}
        />
      </FormControl>
      <CarInputs
        VehicleType  = {VehicleType}
        setVehicleType = {setVehicleType}
        Model = {Model}
        setModel = {setModel}
        Make = {Make}
        setMake = {setMake}
        Engine = {Engine}
        setEngine = {setEngine}
        Doors = {Doors}
        setDoors = {setDoors}
        Wheels = {Wheels}
        setWheels = {setWheels}
        BodyType = {BodyType}
        setBodyType = {setBodyType}
      />
      <Button
        className={classes.button}
        onClick={() => {
          AddCar({ VehicleType, Make, Model, Engine, Doors, Wheels, BodyType });
        }}
      >
        Add Car
      </Button>
    </div>
  );
};

export default CreateCar;
