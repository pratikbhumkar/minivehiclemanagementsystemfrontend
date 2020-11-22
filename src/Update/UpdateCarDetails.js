import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { updateCar } from "../Services/CRUD";
import { VehicleTypeDropDown } from "../Components/VehicleTypeDropDown";
import { CarInputs } from "../Components/CarInputs";
import TextField from "@material-ui/core/TextField";

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
const UpdateCarDetails = ({ rows }) => {
  const classes = useStyles();
  const [VehicleType, setVehicleType] = React.useState("");
  const [Model, setModel] = React.useState("");
  const [Make, setMake] = React.useState("");
  const [Engine, setEngine] = React.useState("");
  const [Doors, setDoors] = React.useState("");
  const [Wheels, setWheels] = React.useState("");
  const [BodyType, setBodyType] = React.useState("");
  const [Id, setId] = React.useState("");

  return (
    <div style={{ margin: "auto" }}>
      <h3>Update Car</h3>
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Id"
        value={Id}
        onChange={(val) => {
          setId(val.target.value);
        }}
      />
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
      <br/>
      <Button
        className={classes.button}
        onClick={() => {
          updateCar({ VehicleType, Make, Model, Engine, Doors, Wheels, BodyType });
        }}
      >
        Update Car
      </Button>
    </div>
  );
};

export default UpdateCarDetails;
