import React, {useState} from 'react';
import SimpleTable from '../components/Table';
import SimpleContainer from '../components/Container';
import ButtonAppBar from '../components/Navbar';
import SearchBar from '../components/Search';
import Employees from '../employees.json';

export default function Home() {
  const [search, setSearch] = useState(Employees);
  console.log(search)

  return (
    <div>
      <ButtonAppBar/>
      <SimpleContainer>
        <SearchBar data={search}/>
        <SimpleTable data={search}/>
      </SimpleContainer>
    </div>
  );
};