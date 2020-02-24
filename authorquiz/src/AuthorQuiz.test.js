import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';

test('renders author quiz', () => {
  const { getByText } = render(<AuthorQuiz />);
  const title = getByText(/Author Quiz/i);
  expect(title).toBeInTheDocument();
});

test('renders without crashing' , () => {
  const div = document.createElement('div')
  ReactDOM.render(<AuthorQuiz></AuthorQuiz>, div)
})
