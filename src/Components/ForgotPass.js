import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPass(props) {
    return (
        <div className='forgotSection'>
            <Link to='/resetPassword' style={{textDecoration:"none"}} ><span className='forgotText'>Forgot password?</span></Link>
        </div>
    );
}

export default ForgotPass;