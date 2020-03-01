import React from 'react'
import ReactDOM from 'react-dom'
import { addAuthor } from './state/authorsState'
import './index.css'
import AuthorQuiz from './AuthorQuiz'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import AddAuthorForm from "./components/AddAuthorForm"


const AddAuthorWrapper = withRouter(({ history }) => <AddAuthorForm onAddAuthor={author => receiveAuthor(author, history)}></AddAuthorForm>)

const receiveAuthor = (author, history) => {
    addAuthor(author)
    history.push('/')
}

const App = _ => (
    <BrowserRouter>
        <Route exact path="/" component={AuthorQuiz}></Route>
        <Route path="/add" component={AddAuthorWrapper}></Route>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
