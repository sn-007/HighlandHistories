import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './pages';


function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
