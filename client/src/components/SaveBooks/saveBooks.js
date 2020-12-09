import React, { Component } from 'react';
import SavedBook from "../SavedBook/savedBook";

class BookList extends Component {


    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <SavedBook
            key={book._id}
            id={book._id}
            title={book.title}
            link={book.link}
            authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
            image={book.image ? book.image : "https://secocms.cpa.texas.gov/sca-dev-kilimanjaro/img/no_image_available.jpeg"}
            description={book.description}
            deleteBook={this.props.deleteBook}
            />
        ))
        )
                           
    }
}

export default BookList