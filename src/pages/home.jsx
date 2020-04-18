import React from 'react';
import SimpleTable from '../components/Table';
import SimpleContainer from '../components/Container';
import ButtonAppBar from '../components/Navbar';
import SearchBar from '../components/Search';
import Employees from '../employees.json';
import CenteredGrid from '../components/Grid';

class Home extends React.Component {
  state = {
    employees: Employees,
    search:"",
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
  
  resetEmployees = () => {
    this.setState({employees: Employees});
    this.setState({search:""})
  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
    const employeeSearch = this.state.employees.filter(employee => employee.name.includes(this.state.search)|| employee.role.includes(this.state.search) )
    this.setState({employees: employeeSearch})
    // resets employee table if user clears out search with backspace. 
    if (event.target.value === '') {
      this.setState({employees: Employees})
    }
  }



  render() {
    return (
      <div>
        <ButtonAppBar/>
        <SimpleContainer>
          <SearchBar handleChange={this.handleChange} search={this.state.search}/>
          <CenteredGrid sortByName={this.sortByName} sortByRole={this.sortByRole} resetEmployees={this.resetEmployees}/>
          <SimpleTable employees={this.state.employees}/>
        </SimpleContainer>
      </div>
    );
  }
}

export default Home;