import React from 'react'

export default ({ match }) => {

    return (
        <div>
            <h1>Add Author</h1>
            <p>{JSON.stringify(match)}</p>
        </div>
    )
}
