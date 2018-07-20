import React from 'react'
import PropTypes from 'prop-types'

const MovieTable = ({children}) => {
  return (
    <table className="mdl-data-table mdl-js-data-table mdl-cell mdl-cell--12-col">
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

MovieTable.propTypes = {
  children: PropTypes.any
}

export default MovieTable