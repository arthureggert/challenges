import React from 'react'
import PropTypes from 'prop-types'
import Grid from './../_common/grid.jsx'

const HomeCard = ({children, handleSubmit, valueToSearch, handleChange}) => {
  return (
    <div className={`mdl-card mdl-cell mdl-shadow--2dp mdl-cell--11-col`}>
      <Grid classz="mdl-grid--no-margin">
        <form onSubmit={handleSubmit} className="mdl-cell mdl-cell--12-col">
          <div
            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--10-col mdl-cell--2-col-phone mdl-cell--4-col-tablet">
            <input
              name="search"
              className="mdl-textfield__input"
              type="text"
              value={valueToSearch}
              onChange={handleChange}/>
            <label className="mdl-textfield__label" htmlFor="search">Search (Enter the film name)...</label>
          </div>
          <button
            className="mdl-button mdl-js-button mdl-button--primary mdl-cell mdl-cell--2-col"
            type="submit">
            Search
          </button>
        </form>
      </Grid>
      <div className="mdl-card__supporting-text mdl-card__supporting-text--center">
        {children}
      </div>
    </div>
  )
};

HomeCard.propTypes = {
  children: PropTypes.any,
  handleSubmit: PropTypes.func.isRequired,
  valueToSearch: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default HomeCard