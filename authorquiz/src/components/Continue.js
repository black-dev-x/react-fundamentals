import React from 'react'
import './Continue.css'

export default ({ show, onContinue }) => {
    return (
        <div className="row continue">
            {show ?
                <div className="col-11">
                    <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue?</button>
                </div>
                : null}
        </div>
    )
}