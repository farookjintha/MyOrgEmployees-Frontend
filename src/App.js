import './App.css';
import AddEmployee from './Components/core/AddEmployee';
import EmployeeList from './Components/core/EmployeesList';
import Footer from './Components/core/Footer';
import Header from './Components/core/Header';
import UpdateEmployee from './Components/core/UpdateEmployee';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<EmployeeList />}/>
            <Route path='/employees/add' element={<AddEmployee />} />
            <Route path='/employees/:empID/update' element={<UpdateEmployee />} />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
