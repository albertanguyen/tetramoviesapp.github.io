import React from 'react';
import {
    Card,
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultposter from './img/not-available-coming-soon.jpg';
import './index.css';
import './App.css';



class Featuremovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloaded: true
        }
    }

    render() {
        return (
            <Card className="d-flex d-inline-flex mb-5 mx-5 text-center" style={{ width: "800px" }}>
                <Card.Img className="img-fluid" variant="top" src={ this.state.poster_path ? 
                `https://image.tmdb.org/t/p/w500/${this.state.poster_path}` : defaultposter } />
                <Card.Body>
                    <p>Released: {this.state.release_date}</p>
                    <p>Rating: {this.state.vote_average}</p>
                    <Card.Title>{this.state.original_title}</Card.Title>
                    <Card.Text style={{ overflowY: "scroll" }}>{this.state.overview}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}


export default Featuremovie;