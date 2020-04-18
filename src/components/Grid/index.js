import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid justify="center"  item xs={6}>
          <Button variant="contained" color="primary" onClick={props.sortByName}>Sort By Name alphabetically</Button>
        </Grid>
        <Grid justify="center"  item xs={6}>
          <Button variant="contained" color="primary" onClick={props.sortByRole}>Sort By Role alphabetically</Button>
        </Grid>
        <Grid justify="center"  item xs={12}>
          <Button variant="contained" color="primary" onClick={props.resetEmployees}>Reset Employees</Button>
        </Grid>
      </Grid>
    </div>
  );
}