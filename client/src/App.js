import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/header"
import Search from "./components/Search/search"
import Book from "./components/Book/book"
import Nav from "./components/Nav/nav"

function App () {

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


export default App;
