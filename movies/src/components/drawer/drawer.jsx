import React from 'react';
import {Link} from 'react-router-dom'

const Drawer = () => {
    return (
        <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">LibraryManager</span>
            <nav className="mdl-navigation">
                <Link className="mdl-navigation__link" to='/'>Home</Link>
                <Link className="mdl-navigation__link" to='/library'>Library</Link>
                <Link className="mdl-navigation__link" to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default Drawer