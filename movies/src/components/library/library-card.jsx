import React from 'react'

const LibraryCard = ({children}) => {
    return (
        <div className={`mdl-card mdl-cell mdl-shadow--2dp mdl-cell--11-col`}>
            <div className="mdl-card__title mdl-typography--text-center">
                <h4 className="mdl-card__title-text">
                    <small className="material-icons">list</small>
                    Your Library
                </h4>
            </div>
            <div className="mdl-card__supporting-text mdl-card__supporting-text--center">
                {children}
            </div>
        </div>
    )
}

export default LibraryCard