import React from 'react';

export default function Counter({ value, increment, decrement }) {
  return (
    <div className="card">
      <h4 className="card-header bg-warning">
        Redux-enabled counter (best practices)
      </h4>
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
