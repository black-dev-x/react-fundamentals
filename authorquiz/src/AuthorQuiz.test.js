import React from 'react'
import ReactDOM from 'react-dom'
import AuthorQuiz from './AuthorQuiz'
import Enzyme, { mount, shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AuthorQuiz></AuthorQuiz>, div)
})

test('When no answer has been selected', () => {
  const authorQuiz = mount(<AuthorQuiz></AuthorQuiz>)
  expect(authorQuiz.find("div.row.turn").props().style.backgroundColor).toBe('')
})
