import React from 'react'
import "./book.css"

function Book () {
    return (
        <div className="card mb-3">
        
        <img src="..." className="card-img-top" alt="..."></img>
        
        <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">This is a wider card with supporting text</p>
        
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-secondary">Save</button>

        </div>
        
        </div>

    )
}


export default Book 