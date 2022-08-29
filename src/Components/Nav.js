import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='lz6s'>
            <div className='MWDvN'>
                <Link to="/"> <img src={require('../Components/images/brandLogo.png')} /></Link>
            </div>
        </div>
    );
}

export default Nav;