import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./home";
import About from "./about";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>

          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
      </Router>

  );
}

export default App;
