import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// Local
import Employees from '../../employees.json';


const useStyles = makeStyles({
  tableCell: {
    fontWeight: "bold",
  },
  table: {
    minWidth: 300,
    maxWidth: 1080,
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  return (
    // create table container 
    <TableContainer className={classes.table} component={Paper}>
      {/*create table */}
      <Table className={classes.table} aria-label="simple table">
        {/* create table header */}
        <TableHead>
          {/* create a row inside the table header with cells for each column acting as labels */}
          <TableRow>
            <TableCell className={classes.tableCell} >Name</TableCell>
            <TableCell className={classes.tableCell} align="right">Role</TableCell>
            <TableCell className={classes.tableCell} align="right">Age</TableCell>
            <TableCell className={classes.tableCell} align="right">Gender</TableCell>
          </TableRow>
        </TableHead>
        {/* create a body for the table data */}
        <TableBody>
          {/* for each row in the data create a row using a row component and then creating a cell for each property of the data */}
          {Employees.map((employee) => (
            <TableRow key={employee.name}>
              <TableCell component="th" scope="row">
                {employee.name}
              </TableCell>
              <TableCell align="right">{employee.role}</TableCell>
              <TableCell align="right">{employee.age}</TableCell>
              <TableCell align="right">{employee.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}