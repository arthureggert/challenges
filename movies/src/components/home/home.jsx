import React, {Component} from 'react'
import PropType from 'prop-types'
import Grid from './../_common/grid.jsx'
import HomeCard from './home-card.jsx'
import axios from 'axios'
import Movie from './../movie/movie.jsx'

class Home extends Component {

  state = {
    term: '',
    movies: [],
    page: 1,
    pages: 0
  }

  render() {
    return (
      <Grid classz="mdl-grid--center-items">
        <HomeCard
          handleChange={this._handleSearchInputChange}
          handleSubmit={this._handleFormSubmit}>
          <Movie {...this.state}/>
        </HomeCard>
      </Grid>
    );
  }

  _handleSearchInputChange = (event) => {
    this.setState(Object.assign({}, this.state, {term: event.target.value}));
  }

  _handleFormSubmit = (event) => {
    event.preventDefault();
    const url = `http://www.omdbapi.com/?s=${this.state.term}&page=${this.state.page}`
    axios
      .get(url)
      .then(response => {
        this.setState(Object.assign({}, this.state, {
          movies: response.data.Search
        }, this.$handlePages(response.data.totalResults)))
      })
      .catch(e => console.log(e));
  }

  $handlePages = (totalResults) => {
    const totalPages = Math.ceil(totalResults / 10)
    return {pages: totalPages}
  }

}

export default Home