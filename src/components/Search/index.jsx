import React from 'react';
import TextField from '@material-ui/core/TextField';



export default function SearchBar() {

  return (
    <form noValidate autoComplete="off">
      <TextField
          id="standard-full-width"
          placeholder="Search Employees"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </form>
  );
}