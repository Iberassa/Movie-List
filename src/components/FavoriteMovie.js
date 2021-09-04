import React, { Component } from 'react'

export default class FavoriteMovie extends Component {
    render() {
        const { id,title, rating, genre, directorName, releaseYear} = this.props.mov
        return (
            <div>
                <p> Title:{title}</p>
                <p>Rating:{rating}</p>
                <p>Genre:{genre}</p>
                <p>directorName:{directorName}</p>
                <p>releaseYear:{releaseYear}</p>
                <button onClick={()=>this.props.removeFromFav(id)}>Remove</button>
            </div>
        )
    }
}
