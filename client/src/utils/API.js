import axios from "axios";

export default {

    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    getBooks: function() {
        return axios.get("/api/books");
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};