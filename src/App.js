import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage.jsx';
import Film from './components/Film.jsx';
import Sale from './components/Sale.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/film" element={<Film/>}/>
        <Route path="/sale" element={<Sale/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
