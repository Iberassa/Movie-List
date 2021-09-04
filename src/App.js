// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Movies from './components/Movies';
import UpdateMovie from './components/UpdateMovie';
import FavoriteMovies from './components/FavoriteMovies';

export default class App extends Component {
  state = {
    movieList: [
      { id: 1, title: 'Movie1', rating: 4, genre: 'Comedy', directorName: 'Brad Tod', releaseYear: 2019 },
      { id: 2, title: 'Movie2', rating: 3, genre: 'Horor', directorName: 'Jenn Adam', releaseYear: 2005 },
      { id: 3, title: 'Movie3', rating: 5, genre: 'Suspense', directorName: 'Steve James', releaseYear: 2010 },
      { id: 4, title: 'Movie4', rating: 2, genre: 'Comedy', directorName: 'Tom Hanks', releaseYear: 2013 },
    ],
    favoriteMovieList: [],
    updatedMovie: [{ title: '', rating: '', genre: '', directorName: '', releaseYear: '' }],
    showUpdateState: false,
    showFavoriteMovies: false,
  }

  deleteMovie = (id) => {
    this.setState({ movieList: [...this.state.movieList.filter((movie) => movie.id !== id)] })
  }

  updateMovie = (id) => {
    this.setState({ showUpdateState: (!this.state.showUpdateState) })
    const mov = this.state.movieList.filter((movie) => movie.id === id)
    this.setState({ updatedMovie: mov })
  }

  sumbitUpdate = (newValue) => {
    console.log(newValue);
    // this.setState({movieList:this.state.movieList.filter((movie)=>movie.id!==id)})
    // this.setState({movieList:[...this.state.movieList,newValue]})
  }

  addtoFavorite = (id) => {
    const favMovie = this.state.movieList.filter((movie) => movie.id === id)
    this.setState({ favoriteMovieList: [...this.state.favoriteMovieList, favMovie] })
    //console.log(this.state.favoriteMovieList);
  }

  showFavMovies = () => {
    this.setState({ showFavoriteMovies: !this.state.showFavoriteMovies })
  }
  removeFromFav=(id)=>{
    this.setState({favoriteMovieList:this.state.favoriteMovieList.map((movies)=>{
      return movies.filter((movie)=>movie.id!==id)
    })})
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <Movies movieList={this.state.movieList} deleteMovie={this.deleteMovie}
          updateMovie={this.updateMovie} addtoFavorite={this.addtoFavorite}
        />
        <button onClick={this.showFavMovies}>showFavoriteMovies</button>
        {this.state.showFavoriteMovies && <FavoriteMovies 
        favoriteMovieList={this.state.favoriteMovieList} removeFromFav={this.removeFromFav}/>}
        {this.state.showUpdateState && <UpdateMovie updatedMovie={this.state.updatedMovie}
          sumbitUpdate={this.sumbitUpdate} />}
      </div>
    )
  }
}


