
import React, { Component } from 'react'
import Book from "../Book";

class BookList extends Component {


    render() {

        console.log("Props", this.props.bookState)

        return (
            this.props.bookState.map((book) => (
            <Book
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            link={book.volumeInfo.previewLink}
            authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://secocms.cpa.texas.gov/sca-dev-kilimanjaro/img/no_image_available.jpeg"}
            description={book.volumeInfo.description}
            saveBook={this.props.saveBook}
            />
        ))
        )
                           
    }
}

export default BookList