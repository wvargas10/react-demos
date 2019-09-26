import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ErrorDemo from './error-boundaries/ErrorDemo';
import CancelPromise from './cancel-promise/CancelPromise';
import EffectHook from './effect-hook/EffectHook';
import ContextDemo from './context-demo/ContextDemo';
import HigherOrderComponent from './higher-order-component/HigherOrderComponent';
import Memoization from './memo-demo/Memoization';
import DynamicComponents from './dynamic-components/DynamicComponents';
import ReduxCounter from './redux-counter/ReduxCounter';
import ReduxCounterBP from './redux-counter-best/ReduxContainer';

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
              <li className="list-unstyled-item">
                <Link to="higher-order-component">Higher Order Component</Link>
              </li>
              <li className="list-unstyled-item">
                <Link to="memoization">Memoization</Link>
              </li>
              <li className="list-unstyled-item">
                <Link to="dynamic-components">DynamicComponents</Link>
              </li>
              <li className="list-unstyled-item">
                <Link to="redux-counter">Redux Counter</Link>
              </li>
              <li className="list-unstyled-item">
                <Link to="redux-counter-best-practices">
                  Redux Counter (best practices)
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Route path="/error-boundaries" component={ErrorDemo} />
            <Route path="/cancel-promise" component={CancelPromise} />
            <Route path="/effect-hook" component={EffectHook} />
            <Route path="/context-demo" component={ContextDemo} />
            <Route
              path="/higher-order-component"
              component={HigherOrderComponent}
            />
            <Route path="/memoization" component={Memoization} />
            <Route path="/dynamic-components" component={DynamicComponents} />
            <Route path="/redux-counter" component={ReduxCounter} />
            <Route
              path="/redux-counter-best-practices"
              component={ReduxCounterBP}
            />
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
