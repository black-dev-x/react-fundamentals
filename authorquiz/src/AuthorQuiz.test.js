import React from 'react'

import Turn from './components/Turn'
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

test('When the wrong answer has been selected background is red', () => {
  const turn = mount(<Turn author="" books={[]} status="wrong"></Turn>)
  expect(turn.find("div.row.turn").props().style.backgroundColor).toBe('red')
})

test('When the right answer has been selected background is green', () => {
  const turn = mount(<Turn author="" books={[]} status="right"></Turn>)
  expect(turn.find("div.row.turn").props().style.backgroundColor).toBe('green')
})

test('Expect the click function to be called', () => {
  const fakeFunction = jest.fn()
  const turn = mount(<Turn author="" books={['one book']} status="right" selectBook={fakeFunction}></Turn>)
  turn.find('.answer').first().simulate('click')
  expect(fakeFunction).toHaveBeenCalled()
})
