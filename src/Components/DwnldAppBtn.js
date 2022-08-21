import React from 'react';
import { Link } from 'react-router-dom';

function DwnldAppBtn(props) {
    return (
        <div className='Img'>
           <a href={"https://apps.apple.com/app/instagram/id389801252?vt=lo"}> <img className='StoreImg' src={require('./images/apple.png')} /></a>
           <a href={"https://play.google.com/store/apps/details?id=com.instagram.android"}><img className='StoreImg' src={require('./images/google.png')} /></a>
        </div>
    );
}

export default DwnldAppBtn;