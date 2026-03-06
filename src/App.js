import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Feed</Link>
            </li>
            <li>
              <Link to='/upload'>Upload</Link>
            </li>
            <li>
              <Link to='/quiz'>Quiz</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact>
            <h1>Welcome to the TikTok-style Lecture Feed</h1>
            {/* Add your feed components here */}
          </Route>
          <Route path='/upload'>
            <h1>Upload Your Lecture</h1>
            {/* Add your upload components here */}
          </Route>
          <Route path='/quiz'>
            <h1>Take a Quiz</h1>
            {/* Add your quiz components here */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;