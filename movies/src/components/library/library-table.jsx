import React from 'react'
import PropTypes from 'prop-types'

const LibraryTable = ({children}) => {
  return (

    <div id="library">
      <div
        className="mdl-textfield mdl-js-textfield mdl-textfield--expandable is-upgraded is-focused mdl-cell mdl-cell--11-col">
        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
          <i className="material-icons">search</i>
        </label>
        <div className="mdl-textfield__expandable-holder mdl-textfield__expandable-holder--search">
          <input className="mdl-textfield__input search" type="text" id="search"/>
        </div>
      </div>
      <table
        id="library"
        className="mdl-data-table mdl-js-data-table mdl-cell mdl-cell--12-col">
        <thead>
          <tr>
            <th className="sort" data-sort="title">Title</th>
            <th className="sort" data-sort="year">Year</th>
            <th className="sort" data-sort="rating">Rating</th>
            <th className="sort" data-sort="genre">Genre</th>
          </tr>
        </thead>
        <tbody className="list">
          {children}
        </tbody>
      </table>
    </div>
  )
}

LibraryTable.propTypes = {
  children: PropTypes.any
}

export default LibraryTable