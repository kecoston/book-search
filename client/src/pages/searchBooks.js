import React, { Component } from "react"
import Header from "../components/Header/header"
import Search from "../components/Search/search"
import Button from "../components/Button/button";
import Nav from "../components/Nav/nav"
import API from "../utils/API"
import BookList from "../components/BookList/bookList"

class SearchBooks extends Component {

    state = {
        books: [],
        search: ""
    };

    
    searchBooks = () => {
        console.log("the state is:", this.state.search)
        API.googleBooks(this.state.search)
            .then(res => {
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };


    saveGoogleBook = selectedBook => {
        API.saveBook({
            id: selectedBook.id,
            title: selectedBook.title,
            authors: selectedBook.authors,
            description: selectedBook.description,
            image: selectedBook.image,
            link: selectedBook.link
        })
        .then(res => console.log("Success"))
        .catch(err => console.log("Error"))
    }

    render() {
        return (
            <div>

            <Header/>
            <Nav />

            <div>
            <Search
                      name="search"
                      value={this.state.search}
                      onChange={this.handleInputChange}
                      placeholder="Search For a Books"
                    />
                <Button
                      onClick={this.handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                </Button>
            <div/>

            {this.state.books.length ? (
            <BookList
            bookState={this.state.books}
            saveBook={this.saveGoogleBook}
            />
            ) : (
                <div>
                    <hr/>
                <p style={{fontStyle: "italic"}}>Search for Books...</p>
                </div>
            )}

            </div>
            </div>
        )
    }

}    

export default SearchBooks