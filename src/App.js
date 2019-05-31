import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Rendermovies from './rendermovies';
import './index.css';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            search: '',
            page: 1,
            isloaded: false
        }
    }

    componentDidMount() {
        this.getmovies()
    }

    async getmovies() {
        const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US&&sort_by=created_at.asc&api_key=71a501ed9edf15977687b58ea874ff93";
        let req = await fetch(url);
        let jsonData = await req.json();

        this.setState(
            {
                movies: jsonData.results,
                page: jsonData.page,
                isloaded: true
            })
        }

    //genres ID list https://api.themoviedb.org/3/genre/tv/list?api_key=<<api_key>>&language=en-US&api_key=71a501ed9edf15977687b58ea874ff93


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="text-uppercase">TetraMovies app</h1>
                </div>
                <div className="App-body">
                    {
                    this.state.movies.map( (movie) => {
                      console.log(movie)
                    return <Rendermovies {...movie} />  
                    })
                    }
                </div>
                <div className="App-footer"></div>
            </div>
        )
    }
}



export default App;
