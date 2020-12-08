import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header"
import Search from "./components/Search/search"
import Book from "./components/Book/book"
import Nav from "./components/Nav/nav"

class App extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      searchValue: "",
      searchInput: ""
    };
  }

  searchInput = (search) => {
    this.setState({searchValue: search})
  }

  render() {

    console.log(this.state.searchValue)

  return (
    <div>
 
    <Header/>
    <Nav />
    <Search  
        search={this.searchInput}
    />
    <Book/>
    
    </div>
  );
}
}


export default App;
