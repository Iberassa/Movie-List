import React, { Component } from 'react';
import Movie from './Movie';

export default class Movies extends Component {
    render() {
        return (this.props.movieList.map((movie) => (
            <React.Fragment>
                <Movie key={movie.id} movie={movie} deleteMovie={this.props.deleteMovie} 
                updateMovie={this.props.updateMovie} showUpdateState={this.props.showUpdateState}
                sumbitUpdate={this.props.sumbitUpdate} addtoFavorite={this.props.addtoFavorite}
                /><hr></hr>
            </React.Fragment>
        ))
        )
    }
}
