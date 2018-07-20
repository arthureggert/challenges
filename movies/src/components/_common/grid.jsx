import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({classz, children}) => {
    return (
        <div className={`mdl-grid ${classz}`}>{children}</div>
    )
}

Grid.propTypes = {
    classz: PropTypes.string.isRequired,
    children: PropTypes.any
}

Grid.defaultProps = {
    classz: ''
}

export default Grid