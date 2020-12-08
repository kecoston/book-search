import React from "react";
import "./search.css"

function Search(props) {
    return (
        <div className="container">

            <div className="form-group">
                <label for="searchInput">Search for Books</label>
                <input 
                    type="search" class="form-control" id="searchInput"></input>

                    <button type="submit" className="btn btn-primary" onClick={ () => props.search(document.getElementById("searchInput").value)}>Submit</button>
            </div>

        </div>

  )
}

export default Search