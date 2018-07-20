import React from 'react'
import PropTypes from 'prop-types'

const MovieItem = ({Poster, Title, Type, Year, imdbID, handleClick}) => {
  return (
    <tr>
      <td>{Title}</td>
      <td>{Year}</td>
      <td>
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={handleClick.bind(this, imdbID)}>
            <i className="material-icons">add</i>
        </button>
      </td>
    </tr>
  )
}

MovieItem.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired
}

export default MovieItem