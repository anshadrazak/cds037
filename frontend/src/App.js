import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Fdashboard from './Fdashboard';
import Mainlogin from './Mainlogin';
import Clogin from './Clogin';
import Flogin from './Flogin';
import Header from './Header';
import Csignup from './Csignup';
import Fsignup from './Fsignup';
import { Toaster, toast } from 'sonner';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Toaster/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/farmersdashboard' element={<Fdashboard/>}/>
          <Route path='/customersdashboard' element={<Fdashboard/>}/>
          <Route path='/mainlogin' element={<Mainlogin/>}/>
          <Route path='/customerlogin' element={<Clogin/>}/>
          <Route path='/farmerlogin' element={<Flogin/>}/>
          <Route path='/customersignup' element={<Csignup/>}/>
          <Route path='/farmersignup' element={<Fsignup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
