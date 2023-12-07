import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greeting">Greeting</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route exact path="/" element={<h2>Click on Greeting to see Greetings</h2>} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  </Router>
);

export default App;
