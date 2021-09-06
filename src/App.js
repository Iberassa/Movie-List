// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Movies from './components/Movies';
import UpdateMovie from './components/UpdateMovie';
import FavoriteMovies from './components/FavoriteMovies';
import AddMovies from './components/AddMovies';

export default class App extends Component {
  state = {
    movieList: [
      { id: 1, title: 'Movie1', rating: 4, genre: 'Comedy', directorName: 'Brad Tod', releaseYear: 2019 },
      { id: 3, title: 'Movie3', rating: 5, genre: 'Suspense', directorName: 'Steve James', releaseYear: 2010 },
      { id: 2, title: 'Movie2', rating: 3, genre: 'Horor', directorName: 'Jenn Adam', releaseYear: 2005 },
      { id: 4, title: 'Movie4', rating: 2, genre: 'Comedy', directorName: 'Tom Hanks', releaseYear: 2013 },
    ],
    favoriteMovieList: [],
    updatedMovie: [{ title: '', rating: '', genre: '', directorName: '', releaseYear: '' }],
    showUpdateState: false,
    showFavoriteMovies: false,
    showAddMovies:false
  }

  deleteMovie = (id) => {
    this.setState({ movieList: [...this.state.movieList.filter((movie) => movie.id !== id)] })
  }

  updateMovie = (id) => {
    this.setState({ showUpdateState: (!this.state.showUpdateState) })
    //const mov = this.state.movieList.filter((movie) => movie.id === id)
    this.setState((currrentState)=>{
      return { 
      updatedMovie: currrentState.movieList.filter((movie) => movie.id === id)} })
  }

  sumbitUpdate = (e,newValue) => {
    e.preventDefault();
    this.setState((currentState) => {
      return {movieList:currentState.movieList.filter((movie)=>movie.id!==newValue.id)}
      })
      this.setState((currentState) => {
        return {movieList:[...currentState.movieList,newValue]}
        })
  }

  addtoFavorite = (id) => {
    const favMovie = this.state.movieList.filter((movie) => movie.id === id)
    this.setState({ favoriteMovieList: [...this.state.favoriteMovieList, favMovie] })
  }

  showFavMovies = () => {
    this.setState({ showFavoriteMovies: !this.state.showFavoriteMovies })
  }
  removeFromFav=(id)=>{
    this.setState({favoriteMovieList:this.state.favoriteMovieList.map((movies)=>{
      return movies.filter((movie)=>movie.id!==id)
    })})
  }

  showAddMoviesButt=()=>this.setState({showAddMovies:!this.state.showAddMovies})

  addMovie=(e,movie)=>{
    e.preventDefault()
    const length = this.state.movieList.length-1
    this.state.movieList.sort((a,b)=>a.id-b.id);
    const newId = this.state.movieList[length].id+1;
    const newMovie = {id:newId, ...movie}
    this.setState({movieList:[...this.state.movieList,newMovie]})
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <Movies movieList={this.state.movieList} deleteMovie={this.deleteMovie}
          updateMovie={this.updateMovie} addtoFavorite={this.addtoFavorite}
        />
        <button onClick={this.showFavMovies}>show Favorite Movies</button>
        {this.state.showFavoriteMovies && <React.Fragment>
          <h3>List Of Favorite Movies</h3>
          <FavoriteMovies 
        favoriteMovieList={this.state.favoriteMovieList} removeFromFav={this.removeFromFav}/>
        </React.Fragment>}
        {this.state.showUpdateState && <UpdateMovie updatedMovie={this.state.updatedMovie}
          sumbitUpdate={this.sumbitUpdate} />}<hr/>
        <button onClick={this.showAddMoviesButt}>Add new Movie</button>
          {this.state.showAddMovies && <AddMovies addMovie={this.addMovie}/>}
      </div>
    )
  }
}


