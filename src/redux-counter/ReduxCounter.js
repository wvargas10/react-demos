import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect, Provider } from 'react-redux';

const initialState = { counter: 1 };

// Action types
const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// Action creators
const addOne = () => ({ type: actions.INCREMENT });
const subtractOne = () => ({ type: actions.DECREMENT });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { counter: state.counter + 1 };
    case actions.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger)),
);

function Counter({ value, increment, decrement }) {
  return (
    <div className="card">
      <h4 className="card-header bg-warning">Redux-enabled counter</h4>
      <div className="card-body">
        <header className="text-center">
          <h1>{value}</h1>
        </header>
        <div className="text-center">
          <button className="btn btn-danger" onClick={decrement}>
            <span role="img" aria-label="heavy minus sign">
              ➖
            </span>
            <br />
            Decrement
          </button>
          &nbsp;
          <button className="btn btn-success" onClick={increment}>
            <span role="img" aria-label="heavy plus sign">
              ➕
            </span>
            <br />
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(addOne()),
  decrement: () => dispatch(subtractOne()),
});

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default function ReduxContainer() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}
