import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
function LogInWithFacebook(props) {
    return (
        <div className='F-section'>
            <FaFacebookSquare className='fa' /> <span className='LogInWithFacebook'>Log in with Facebook</span>
        </div>
    );
}

export default LogInWithFacebook;