import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import SimpleTable from '../components/Table';
import SimpleContainer from '../components/Container';
import ButtonAppBar from '../components/Navbar';
import SearchBar from '../components/Search';
import Employees from '../employees.json';

class Home extends React.Component {
  state = {
    employees: Employees
  };

  sortByName = () => {
    const sortByName = this.state.employees.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      //sort string ascending
      if (nameA < nameB)
          return -1 
      if (nameA > nameB)
          return 1
      return  0//default return value (no sorting)
    })
    this.setState(sortByName);
  };

  sortByRole = () => {
    const sortByRole = this.state.employees.sort(function(a, b){
      var roleA=a.role.toLowerCase(), roleB=b.role.toLowerCase()
      //sort string ascending
      if (roleA < roleB)
          return -1 
      if (roleA > roleB)
          return 1
      return  0//default return value (no sorting)
    })
    this.setState(sortByRole);
  };
  
  render() {
    return (
      <div>
        <ButtonAppBar/>
        <SimpleContainer>
          <SearchBar/>
          <Button variant="contained" color="primary" onClick={this.sortByName}>Sort By alphabetically Name</Button>
          <Button variant="contained" color="primary" onClick={this.sortByRole}>Sort By alphabetically Role</Button>
          <SimpleTable employees={this.state.employees}/>
        </SimpleContainer>
      </div>
    );
  }
}

export default Home;