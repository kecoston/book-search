import React from 'react';

function Book(props) {
    const {title, authors, image, link, description, deleteGoogleBook} = props
    return (
        <div className="card mb-3">
        <div className="row g-0">
        <div className="col-md-4">
        <img src={image} className="card-img-top" alt={title}></img>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">Author: {authors}</p>

            <a
                href={link}
                target="_black"
                className="btn btn-secondary">
                    Learn More
            </a>
            <button
                onClick={deleteGoogleBook.bind(this, props)}
                type="button"
                className="btn btn-secondary">
                    Delete
            </button>

        </div>
        </div>
        </div>
    </div>
    )
}

export default Book;