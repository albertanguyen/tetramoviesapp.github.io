import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button } from 'react-bootstrap';
import './searchmovies.css';



class Searchmovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloaded: true
        }
    }


    render() {
        return (
            <div className="searchbar mt-3">
                <input className="search_input" type="text" style={{ fontSize: "0.8em" }} placeholder="Let's binge-watching a movie" id="UserInput" />
                <a className="search_icon"><i className="fas fa-search"></i></a>
            </div>
        )
    }
}


export default Searchmovies;