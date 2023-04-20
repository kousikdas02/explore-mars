import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavbarNav from './component/Navbar/NavbarNav';
import Home from './pages/core/Home/Home';
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import Rovers from './pages/core/Rovers/Rovers';

function App() {
  return (
    <>
      <div className='backgroundWrapper'>

      
        <NavbarNav />
        <Router>
          <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/rovers' element={<Rovers />}/>
          </Routes>
        </Router>
      </div>
      
    </>
  );
}

export default App;
