import React from 'react';
import { Link } from 'react-router-dom';

function DwnldAppBtn(props) {
    return (
        <div className='Img'>
           <Link to={"https://apps.apple.com/app/instagram/id389801252?vt=lo"}> <img className='StoreImg' src={require('./images/apple.png')} /></Link>
           <Link to={"https://play.google.com/store/apps/details?id=com.instagram.android"}><img className='StoreImg' src={require('./images/google.png')} /></Link>
        </div>
    );
}

export default DwnldAppBtn;