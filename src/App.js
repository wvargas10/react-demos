import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ErrorDemo from './error-boundaries/ErrorDemo';
import CancelPromise from './cancel-promise/CancelPromise';
import EffectHook from './effect-hook/EffectHook';
import ContextDemo from './context-demo/ContextDemo';

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
              <li className="list-unstyled-item">
                <Link to="effect-hook">Effect Hook</Link>
              </li>
              <li className="list-unstyled-item">
                <Link to="context-demo">Context API</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Route path="/error-boundaries" component={ErrorDemo} />
            <Route path="/cancel-promise" component={CancelPromise} />
            <Route path="/effect-hook" component={EffectHook} />
            <Route path="/context-demo" component={ContextDemo} />
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
