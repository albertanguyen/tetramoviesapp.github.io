import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button } from 'react-bootstrap';
import './searchmovies.css';



class Searchmovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloaded: true,
            searchText: '',
            pageRequest: 1,
            UserInput: []
        }
    }


    clearUserInput() {this.getElementById('UserInput').value = ''}
    UserInput() {JSON.parse(localStorage.getItem('UserInput'))}


    componentDidMount() {
        this.searchMovies()
    }


    async searchMovies() {
        const { pageRequest } = this.state
        const url = `https://api.themoviedb.org/3/search/movie?api_key=1ba877ea9b60eed18e4a44c2cf42fc99&query=${this.state.searchText}&page=${pageRequest}`
        const req = await fetch(url)
        const jsonData = await req.json()
        this.setState({
            pageRequest: pageRequest + 1,
            movies: jsonData.results
            isloaded: true
        })
    }

    searchText: '',
    validate(e) {
        const text = e.target.value;
        document.getElementById("UserInput").innerHTML = text;
    }

    SearchInputHandleChange() {
        document.getElementById("UserInput").innerHTML = "";
        document.getElementById("UserInput").innerHTML = `
        <input className="search_input" type="text" style={{ fontSize: "0.8em" }} 
                placeholder="Let's binge-watching a movie" id="UserInput" onClick={ () => SearchInputHandleChange() }/>
        `;
        document.getElementById("todoTitle").focus();
        const todotitle = document.getElementById("todoTitle");
        todotitle.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                validate(e);
            }
        });
    };




    render() {
        return (
            <div className="searchbar mt-3">
                <SearchInputHandleChange />
                <a className="search_icon"><i className="fas fa-search"></i></a>
            </div>
        )
    }
}


export default Searchmovies;