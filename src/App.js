import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Rendermovies from './rendermovies';
import Searchmovies from './searchmovies';
import Modal from 'react-modal';
import YouTube from '@u-wave/react-youtube';
import './index.css';
import './App.css';

const customStyles = {
    content : {
      padding: 0,
      overflow: "hidden"
    }
  };

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            search: '',
            pageRequest: 1,
            activePage: 1,
            isloaded: false,
            isModalOn: false,
            getMovieId : null,
        }
    }

    componentDidMount() {
        this.getmovies()
    }
    

    async getmovies() {
        const { pageRequest } = this.state // same as pageRequest = this.state.pageRequest  
        const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&&sort_by=created_at.asc&api_key=71a501ed9edf15977687b58ea874ff93&page=${pageRequest}`;
        let req = await fetch(url);
        let jsonData = await req.json();

        this.setState(
            {
                movies: this.state.movies.concat(jsonData.results),
                pageRequest: pageRequest + 1 ,
                isloaded: true,
            })
        }

        watchTrailer = async (movieId) => {
            const response = await fetch (`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=f25b9d6891f4f18bf76a32be085ea114`)
            const jsonData = await response.json()

            let pickRandomTrailer = null
            if (jsonData.results !== undefined) {
                pickRandomTrailer = jsonData.results[Math.floor(Math.random()*jsonData.results.length)]
            }
            
            if (pickRandomTrailer !== undefined) {
                this.setState({isModalOn : true, getMovieId: pickRandomTrailer.key})

            }
        }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img className="App-logo" src={'img/cinema-logo-with-popcorn-nbg.png'} alt="logo"/>
                    <h1 className="text-uppercase">TetraMovies app</h1>
                    {<Searchmovies />}
                </div>
                <div className="App-body container">
                    <div className="row d-flex justify-content-center">
                        {this.state.movies.map( movie => 
                        (<div className="col-lg-4 col-md-6 col-12" style={{ height: 1000 }} key={movie.id}> 
                            {<Rendermovies {...movie} watchTrailer={this.watchTrailer} watchTrailer = {this.watchTrailer}/>} 
                            </div>)
                        ) }
                    </div>
                </div>
                <div className="App-footer" onClick={() => this.getmovies()}>
                    <Button style={{ width: "60%", backgroundColor: "#62ccc7", borderColor: "#62ccc7" }}>See More ...</Button>
                </div>
                <Modal
                isOpen={this.state.isModalOn}
                onRequestClose={() => this.setState ({isModalOn: false})}
                contentLabel="Example Modal"
                style={customStyles}
                >
                    <YouTube
                    height="100%"
                    width="100%"
                    video={this.state.getMovieId}
                    autoplay
                    />
                </Modal>
            </div>
        )
    }
}



export default App;
