import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
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

export const CarInputs = ({
  Model,
  setModel,
  Make,
  setMake,
  Engine,
  setEngine,
  Doors,
  setDoors,
  Wheels,
  setWheels,
  BodyType,
  setBodyType,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Make"
        value={Make}
        onChange={(val) => {
          setMake(val.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Model"
        value={Model}
        onChange={(val) => {
          setModel(val.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Engine"
        value={Engine}
        onChange={(val) => {
          setEngine(val.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Doors"
        value={Doors}
        onChange={(val) => {
          setDoors(parseInt(val.target.value, 10));
        }}
      />
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Wheels"
        value={Wheels}
        onChange={(val) => {
          setWheels(parseInt(val.target.value, 10));
        }}
      />
      <TextField
        id="standard-basic"
        className={classes.textField}
        color="red"
        label="Body Type"
        value={BodyType}
        onChange={(val) => {
          setBodyType(val.target.value);
        }}
      />
    </React.Fragment>
  );
};
