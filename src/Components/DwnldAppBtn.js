import React from 'react';

function DwnldAppBtn(props) {
    return (
        <div className='Img'>
            <img className='StoreImg' src={require('./images/apple.png')} />
            <img className='StoreImg' src={require('./images/google.png')} />
        </div>
    );
}

export default DwnldAppBtn;