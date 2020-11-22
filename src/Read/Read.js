import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import CreateCar from "../Create/CreateCar";
import UpdateCarDetails from "../Update/UpdateCarDetails";
import { readData, deleteCar } from "../Services/CRUD";
import { addCar } from "../Services/CRUD";
const styles = theme => ({
  root: {
    width: '80rem',
    overflowX: 'auto',
    margin: 'auto',
    marginTop: 100
  },
  table: {
    margin: 'auto'
  },
  tableCell:{
    align:"center"
  },
  tableHeadCell:{
    fontStyle: 'bold'
  },
});

function Read(props) {
  const { classes } = props;
  const [rows, setRows] = React.useState([])

  React.useEffect(() => {
      readData(setRows)
    },[rows])

  const AddCar =async (carData)=>{
    addCar(carData)
    readData(setRows)
  }

  return (
    <React.Fragment>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>Id</TableCell>
            <TableCell className={classes.tableHeadCell}>Vehicle Type</TableCell>
            <TableCell className={classes.tableHeadCell}>Make</TableCell>
            <TableCell className={classes.tableHeadCell}>Model</TableCell>
            <TableCell className={classes.tableHeadCell}>Engine</TableCell>
            <TableCell className={classes.tableHeadCell}>Doors</TableCell>
            <TableCell className={classes.tableHeadCell}>Wheels</TableCell>
            <TableCell className={classes.tableHeadCell}>Body Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.tableCell}>{row.Id}</TableCell>
              <TableCell className={classes.tableCell}>{row.VehicleType}</TableCell>
              <TableCell className={classes.tableCell}>{row.Make}</TableCell>
              <TableCell className={classes.tableCell}>{row.Model}</TableCell>
              <TableCell className={classes.tableCell}>{row.Engine}</TableCell>
              <TableCell className={classes.tableCell}>{row.Doors}</TableCell>
              <TableCell className={classes.tableCell}>{row.Wheels}</TableCell>
              <TableCell className={classes.tableCell}>{row.BodyType}</TableCell>
              <TableCell className={classes.tableCell}><Button onClick={()=>{
                deleteCar(row.Id)
                readData(setRows)
                }}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <div className={classes.root}>
      <div className={classes.table}>
        <CreateCar AddCar={AddCar}/>
      </div>
    </div>
    <div className={classes.root}>
      <div className={classes.table}>
        <UpdateCarDetails rows/>
      </div>
    </div>
    </React.Fragment>
  );
}

Read.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Read);
