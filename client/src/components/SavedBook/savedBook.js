import React from 'react';

function SavedBook(props) {
    const {title, authors, image, link, description, deleteBook} = props
    return (
        <div className="card mb-3">

        <img src={image} className="card-img-top" alt={title}></img>

        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">Author: {authors}</p>

            <button
                onCLick={link}
                target="_black"
                type="button"
                className="btn btn-secondary">
                    Learn More
            </button>
            <button
                onCLick={deleteBook.bind(this.props)}
                type="button"
                className="btn btn-secondary">
                    Delete
            </button>

        </div>

    </div>
    )
}

export default ResultListItem;