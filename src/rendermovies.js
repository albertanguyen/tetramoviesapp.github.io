import React, { Component } from 'react';
import { 
    Card, 
    ButtonToolbar, 
    Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

class Rendermovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloaded: true,
        }
    }


    render() {
        return (
                <Card className="mb-3">
                    <Card.Img variant="top" style={{height: 520}} src={this.props.poster_path ?
                    `https://image.tmdb.org/t/p/w500/${this.props.poster_path}` : 'img/not-available-coming-soon.jpg' } />
                    <ButtonToolbar className="justify-content-center mt-2 justify-item-center">
                    <Button style={{ backgroundColor: "#62ccc7", borderColor:"#62ccc7"}}>Genres</Button>
                    </ButtonToolbar>

                    <Card.Body>
                        <p>Released: { this.props.release_date ? this.props.release_date : <i>Updated soon</i> }</p>
                        <p>Rating: { this.props.vote_average ? this.props.vote_average : <i>Updated soon</i> }</p>
                        
                        <Card.Title style={{ height: 80, fontWeight: "bold"}}>{this.props.original_title ? 
                            this.props.original_title : <i>Updated soon</i>}</Card.Title>
                        
                        <Card.Text style={{ overflowY: "scroll", height: 200}}>{this.props.overview ? 
                            this.props.overview : <i>Updated soon</i>}</Card.Text>
                    </Card.Body>
                </Card>
        )
    }
}



export default Rendermovies;