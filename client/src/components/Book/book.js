import React, { Component } from 'react'
import "./book.css"

class Book extends Component {

    state = {
        saved: false,
        text: "Save"
    }

    componentDidMount = () => {
        this.setState({
            saved: true
        })
        console.log("Saved")
    }

    changeText = () => {
        if (this.state.text === "Save") {
            this.setState({
                text: "Saved"
            })
        } else {
            this.setState({
                text: "Save"
            })
        }
    }
    
    handleSaveButton = () => {
            this.props.saveBook(this.props)
            this.changeText();
     }

        render() {

            const { book } = this.props

            return (

                <div className="card mb-3">

                    <img src={this.props.image} className="card-img-top" alt={this.props.title}></img>

                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text">Author: {this.props.author}</p>

                        <a href={this.props.link}
                            target="_black"
                            rel="noopener noreferrer"
                            type="button"
                            className="btn btn-secondary">
                                Learn More
                        </a>
                        <button
                            onCLick={this.handleSaveButton}
                            type="button"
                            className="btn btn-secondary">
                                {this.state.text}
                        </button>

                    </div>

                </div>

            )
        }

    }


    export default Book 