import React from 'react';
import SimpleTable from './components/Table';
import SimpleContainer from './components/Container';
import ButtonAppBar from './components/Navbar';
 
function App() {
  return (
    <div>
      <ButtonAppBar/>
      <SimpleContainer>
        <SimpleTable/>
      </SimpleContainer>
    </div>
  );
}

export default App;
