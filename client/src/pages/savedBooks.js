import React, { Component } from "react"
import Header from "../components/Header/header"
import Nav from "../components/Nav/nav"
import API from "../utils/API"
import BookList from "../components/SaveBooks/saveBooks"

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    // deleteGoogleBook = currentBook => {
    //     API.deleteBook( currentBook.id )
    //     .then(res => {
    //         console.log("You deleted this book:", res);
    //         this.getBooks();
    //     })
    //     .catch(err => {
    //         console.log("This is the error", err);
    //     })
    // }




    render() {
        return (
            <div>
                <Header />
                <Nav /> 
                <div>
                {this.state.savedBooks.length ? (
                    <BookList 
                    bookState={this.state.books}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </BookList>
                 ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                    </div>
                )}
                
                </div>
            </div>
        )
    }
}

export default Saved