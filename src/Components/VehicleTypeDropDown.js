import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export const VehicleTypeDropDown = ({ VehicleType, setVehicleType }) => {
  const handleChange = (event) => {
    setVehicleType(event.target.value);
  };
  return (
    <React.Fragment>
      <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={VehicleType}
        onChange={handleChange}
      >
        {["Car", "Truck", "SUV"].map((item) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </React.Fragment>
  );
};
