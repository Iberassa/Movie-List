import React, { Component } from 'react';

export default class UpdateMovie extends Component {

    state = {
        title: '',
        rating: 0,
        genre: '',
        directorName: '',
        releaseYear: 0
    }


    onChange = (event) => this.setState({[event.target.name]:event.target.value})

    render() {
        return (
            <div>
                <p>
                    Title {' '}<input type='text' value={this.props.updatedMovie[0].title} onChange={this.onChange}/><br />
                    Rating {' '}<input type='number'  onChange={this.onChange} value={this.props.updatedMovie[0].rating} /><br />
                    Genre{' '}<input type='text'  onChange={this.onChange} value={this.props.updatedMovie[0].genre} /><br />
                    Director Name{' '}<input type='text'  onChange={this.onChange} value={this.props.updatedMovie[0].directorName} /><br />
                    Release Year{' '}<input type='text'  onChange={this.onChange} value={this.props.updatedMovie[0].releaseYear} /><br />
                    <button onClick={(event)=>this.props.sumbitUpdate(event)}>Apply Update</button>
                </p>
            </div>
        )
    }
}
