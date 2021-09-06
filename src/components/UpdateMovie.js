import React, { Component } from 'react';

export default class UpdateMovie extends Component {

    state = {
        id:this.props.updatedMovie[0].id,
        title: this.props.updatedMovie[0].title,
        rating: this.props.updatedMovie[0].rating,
        genre: this.props.updatedMovie[0].genre,
        directorName: this.props.updatedMovie[0].directorName,
        releaseYear: this.props.updatedMovie[0].releaseYear
    }


    onChange = (event) =>this.setState({ [event.target.name]: event.target.value })

    render() {
        return (
            <form>
                Title {' '}<input
                    type='text'
                    name='title'
                    defaultValue={this.props.updatedMovie[0].title}
                    onChange={(e) => this.onChange(e)} /><br />
                Rating {' '}<input
                    type='number'
                    name='rating'
                    onChange={this.onChange}
                    defaultValue={this.props.updatedMovie[0].rating} /><br />
                Genre{' '}<input
                    type='text'
                    name='genre'
                    onChange={this.onChange}
                    defaultValue={this.props.updatedMovie[0].genre} /><br />
                Director Name{' '}<input
                    type='text'
                    name='directorName'
                    onChange={this.onChange}
                    defaultValue={this.props.updatedMovie[0].directorName} /><br />
                Release Year{' '}<input
                    type='text'
                    name='releaseYear'
                    onChange={this.onChange}
                    defaultValue={this.props.updatedMovie[0].releaseYear} /><br />
                <button type='submit' onClick={(e) => this.props.sumbitUpdate(e,this.state)}>Apply Update</button>
            </form>
        )
    }
}
