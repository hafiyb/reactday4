import logo from './logo.svg';
import './App.css';
import Dashboard from './containers/dashboard';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return(
    <div className="App">
      <Dashboard />
    </div>
  )
}

export default App;
