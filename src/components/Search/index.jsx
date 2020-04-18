import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function SearchBar(props) {
  return (
    <form noValidate autoComplete="off" onSubmit={props.handleFormSubmit}>
      <TextField
          id="searchField"
          placeholder="Search Employees"
          value={props.search}
          onChange={props.handleChange} 
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </form>
  );
}