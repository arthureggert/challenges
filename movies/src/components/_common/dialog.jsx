import React from 'react'

const Dialog = ({title, message, onClose}) => {
  return (
    <dialog className="mdl-dialog">
      <h4 className="mdl-dialog__title">{title}</h4>
      <div className="mdl-dialog__content">
        <p>
          {message}
        </p>
      </div>
      <div className="mdl-dialog__actions">
        <button type="button" className="mdl-button close" onClick={onClose}>OK</button>
      </div>
    </dialog>
  )
}

export default Dialog