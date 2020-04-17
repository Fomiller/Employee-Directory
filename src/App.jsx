import React from 'react';
import SimpleTable from './components/Table';
import SimpleContainer from './components/Container';
import ButtonAppBar from './components/Navbar';
import SearchBar from './components/Search';
 
function App() {
  return (
    <div>
      <ButtonAppBar/>
      <SimpleContainer>
        <SearchBar/>
        <SimpleTable/>
      </SimpleContainer>
    </div>
  );
}

export default App;
