import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import logo from './logo.svg';
// import Pagination from 'react-js-pagination';
// import  from 'nw-react-slider';
// require('nw-react-slider')
// require("bootstrap/less/bootstrap.less");
import Rendermovies from './rendermovies';
import './index.css';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            search: '',
            pageRequest: 1,
            activePage: 1,
            isloaded: false
        }
    }

    componentDidMount() {
        this.getmovies()
    }
    

    async getmovies() {
        const { pageRequest } = this.state // it's the same as pageRequest = this.state.pageRequest  
        const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&&sort_by=created_at.asc&api_key=71a501ed9edf15977687b58ea874ff93&page=${pageRequest}`;
        let req = await fetch(url);
        let jsonData = await req.json();

        this.setState(
            {
                movies: this.state.movies.concat(jsonData.results),
                pageRequest: pageRequest + 1 ,
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
                <div className="App-body container">

                    <div className="row mt-5 d-flex justify-content-center">
                        {/* {this.state.movies.map(movie => <Featuremovie {movie} />)} */}
                        {/* <Card className="d-flex d-inline-flex mb-5 mx-5 text-center" style={{ width: "800px" }}>
                            <Card.Img className="img-fluid" variant="top" src={`https://image.tmdb.org/t/p/w500/${this.state.poster_path}`} />
                            <Card.Body>
                                <p>Released: {this.state.release_date}</p>
                                <p>Rating: {this.state.vote_average}</p>
                                <Card.Title>{this.state.original_title}</Card.Title>
                                <Card.Text style={{ overflowY: "scroll" }}>{this.state.overview}</Card.Text>
                            </Card.Body>
                        </Card> */}
                        </div>
                    <div className="row d-flex justify-content-center">
                        {this.state.movies.map( movie => 
                        (<div className="col-lg-4 col-md-6 col-12" style={{ height: 1000 }} key={movie.id}> 
                            {<Rendermovies {...movie} />} 
                            </div>)
                        ) }
                    </div>
                    {/* <div>
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={450}
                            pageRangeDisplayed={5}
                            onChange={: :this.handlePageChange}
                      />
                    </div> */}

                </div>
                <div className="App-footer" onClick={() => this.getmovies() }><Button style={{ width: "60%" }} variant="warning">See More ...</Button></div>
            </div>
        )
    }
}



export default App;
