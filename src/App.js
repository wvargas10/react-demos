import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ErrorDemo from './error-boundaries/ErrorDemo';
import CancelPromise from './cancel-promise/CancelPromise';

function App() {
  return (
    <Router>
      <main className="container">
        <header className="row">
          <div className="col">
            <h1>React Demos</h1>
            <hr />
          </div>
        </header>
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li className="list-unstyled-item">
                <Link to="error-boundaries">Error Boundaries</Link>
              </li>
              <li className="list-unstyled-item">
                <Link to="cancel-promise">Cancel Promises (axios)</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Route path="/error-boundaries" component={ErrorDemo} />
            <Route path="/cancel-promise" component={CancelPromise} />
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
