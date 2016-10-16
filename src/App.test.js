import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('can fuck yourself', () => {
  expect(1 + 2).toBe(3);
  expect(10 * 2).toBe(20);
});
