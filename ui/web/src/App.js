import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from "./login";
import Home from "./home";

function App() {
  return (
    <div className="App">
     <Router>
       <Router path="/" exact component={Login}></Router>
       <Router path="/home" exact component={Home}></Router>
     </Router>
    </div>
  );
}

export default App;
