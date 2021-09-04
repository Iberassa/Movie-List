//import react from 'react';
import React, { Component } from 'react';

export default class Movie extends Component {
    state={
    showMovieDetail: false
    }
    showMovieDetailFun = () => {
        this.setState({ showMovieDetail: !this.state.showMovieDetail })
      }
    
    render() {
        const { id, title, rating, genre, directorName, releaseYear} = this.props.movie
        return (
            <div>
                <p>Title:{title}</p>
                <p>Rating:{rating}</p>
                <p>Genre:{genre}</p>
                {this.state.showMovieDetail && <div>
                <p>directorName:{directorName}</p>
                <p>releaseYear:{releaseYear}</p>
                </div>}
                <button onClick={this.showMovieDetailFun}>Details</button>
                <button onClick={() => this.props.deleteMovie(id)}>Delete</button>
                <button onClick={() => this.props.updateMovie(id)}>Update</button>
                <button onClick={()=>this.props.addtoFavorite(id)}>Add To Favorite</button>
            </div>
        )
    }
}
