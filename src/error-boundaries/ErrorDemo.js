import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import CounterWithProblems from './CounterWithProblems';
import ShowError from './ShowError';

const errorComponent = <ShowError />;

const ErrorDemo = () => {
  return (
    <div>
      <h2>Error Boundaries</h2>
      <p>
        The component below will occasionally throw an error. It is isolated
        inside an ErrorBoundary, a custom component which uses{' '}
        <code>getDerivedStateFromError</code> and <code>componentDidCatch</code>
        .
      </p>
      {/*       <ErrorBoundary errorComponent={errorComponent}>
        <CounterWithProblems />
      </ErrorBoundary>
 */}{' '}
      <section>
        <ErrorBoundary errorComponent={errorComponent} level="1">
          <One />
        </ErrorBoundary>
      </section>
    </div>
  );
};

function One() {
  return (
    <div>
      <h3>One</h3>
      <ErrorBoundary errorComponent={errorComponent} level="2">
        <Two />
      </ErrorBoundary>
    </div>
  );
}

function Two() {
  /*   setTimeout(() => {
    throw new Error('test error');
  }, 5000); */

  return (
    <div>
      <h3>Two</h3>
      {/* <p>Throwing an error in 5 seconds</p> */}
      <CounterWithProblems />
    </div>
  );
}

export default ErrorDemo;
