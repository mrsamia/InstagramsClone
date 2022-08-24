import React from 'react';

function InstagramLogo(props) {
    return (
        <div className='imgWrapper'>
            <img src={require('./images/instagramLogo.png')} className={props.className} />
        </div>
    );
}

export default InstagramLogo;