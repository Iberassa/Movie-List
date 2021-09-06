import React, { Component } from 'react'

export default class AddMovies extends Component {
    state = {
            title: '',
            rating: 0,
            genre: '',
            directorName: '',
            releaseYear: 0
    }

    onChange=(e)=>this.setState({[e.target.name]:e.target.value})

    render() {
        return (
            <form>
                <h3>Add Movie</h3>
                Title<input 
                type='text' 
                name='title' 
                onChange={this.onChange}/><br />
                Rating<input 
                type='number' 
                name='rating'
                onChange={this.onChange}/><br />
                Genre<input 
                type='text' 
                name='genre'
                onChange={this.onChange}/><br />
                Director Name<input 
                type='text' 
                name='directorName'
                onChange={this.onChange}/><br />
                Release Year<input 
                type='number' 
                name='releaseYear'
                onChange={this.onChange}/><br />
                <button onClick={(e)=>this.props.addMovie(e,this.state)}>Add</button>
            </form>
        )
    }
}
