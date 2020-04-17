import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function SimpleContainer(props) {
  console.log("CONTAINER: ",props);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" {...props}/>
    </React.Fragment>
  );
} 