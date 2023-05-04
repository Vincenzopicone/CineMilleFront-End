import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import Programmazione from './components/Programmazione.jsx';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Programmazione></Programmazione>

    </div>
  );
}

export default App;
