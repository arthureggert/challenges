import React, {Component} from 'react'
import MovieTable from './movie-table.jsx'
import MovieItem from './movie-item.jsx'
import PropTypes from 'prop-types'
import axios from 'axios'
import Dialog from './../_common/dialog.jsx'
import Pagination from './../_common/pagination.jsx'
import Grid from './../_common/grid.jsx'
import {uniqBy} from 'lodash'

class Movie extends Component {

  state = {
    movies: [],
    page: 0,
    pages: 0
  }

  static propTypes = {
    term: PropTypes.string,
    movies: PropTypes.array,
    page: PropTypes.number,
    pages: PropTypes.number
  }

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({movies: nextProps.movies, page: nextProps.page, pages: nextProps.pages})
  }

  render() {
    return (this.state.movies.length > 0
      ? <Grid>
          <MovieTable>
            {this
              .state
              .movies
              .map((movie, index) => (<MovieItem key={index} {...movie} handleClick={this._handleClickAddFavorite}/>))}
          </MovieTable>
          <Pagination
            page={this.state.page}
            pages={this.state.pages}
            onNext={this._handleNext}
            onPrev={this._handlePrev}/>
          <Dialog
            title={'Movie added'}
            message={'Movie add with success to your library'}
            onClose={this._handleDialogClose}/>
        </Grid>
      : <Grid/>)
  }

  _handleDialogClose = () => {
    this
      .dialog
      .close()
  }

  _handlePrev = () => {
    let page = this.state.page - 1;
    page = page < 1
      ? 1
      : page
    this._updateMovies(page)
  }

  _handleNext = () => {
    let page = this.state.page + 1;
    page = page > this.state.pages
      ? this.state.pages
      : page
    this._updateMovies(page)
  }

  _handleClickAddFavorite = (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imdbID}`
    axios
      .get(url)
      .then(response => {
        let movies = JSON.parse(localStorage.getItem('movies')) || []
        movies.push({title: response.data.Title, year: response.data.Year, rating: response.data.imdbRating, genre: response.data.Genre, imdbID: imdbID})
        localStorage.setItem('movies', JSON.stringify(uniqBy(movies, 'imdbID')))
        this
          .dialog
          .showModal();
      })
      .catch(e => console.log(e));
  }

  _updateMovies = (page) => {
    const url = `http://www.omdbapi.com/?s=${this.props.term}&page=${page}`
    axios
      .get(url)
      .then(response => {
        this.setState(Object.assign({}, this.state, {
          movies: response.data.Search,
          page: page
        }))
      })
      .catch(e => console.log(e));
  }

  get dialog() {
    return document.querySelector('dialog');
  }

}

export default Movie