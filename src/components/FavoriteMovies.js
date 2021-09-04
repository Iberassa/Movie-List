import React, { Component } from 'react'
import FavoriteMovie from './FavoriteMovie'

export default class FavoriteMovies extends Component {
    render() {
        return (
            this.props.favoriteMovieList.map((movie)=>(
                movie.map((mov)=>(
                <React.Fragment>
                <FavoriteMovie key={mov.id} mov={mov} removeFromFav={this.props.removeFromFav}
                /><hr></hr>
            </React.Fragment>
            )))
        ))
    }
}
