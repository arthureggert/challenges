import React from 'react'
import PropTypes from 'prop-types'

const AboutCard = ({icon, title, text, children, classz}) => {
    return (
        <div className={`mdl-card mdl-cell mdl-shadow--2dp ${classz}`}>
            <div className="mdl-card__title mdl-typography--text-center">
                <h4 className="mdl-card__title-text">
                    <small className="material-icons">{icon}</small>
                    {title}
                </h4>
            </div>
            <div className="mdl-card__supporting-text mdl-card__supporting-text--center">
                <span dangerouslySetInnerHTML={{__html: text}}></span>
                {children}
            </div>
        </div>
    )
};

AboutCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.any,
    classz: PropTypes.string.isRequired
}

AboutCard.defaultProps = {
    classz: 'mdl-cell--4-col'
}

export default AboutCard