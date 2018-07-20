import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({page, pages, onNext, onPrev}) => {
  return (
    <div className="mdl-paging">
      <button
        className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-paging__prev"
        onClick={onPrev}>
        <i className="material-icons">keyboard_arrow_left</i>
      </button>
      <span className="mdl-paging__count">{`Page ${page} from ${pages}`}</span>
      <button
        className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-paging__next"
        onClick={onNext}>
        <i className="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
}

Pagination.defaultProps = {
  page: 0,
  pages: 0
}

export default Pagination