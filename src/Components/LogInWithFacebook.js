import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
function LogInWithFacebook(props) {
    return (
        <div className='F-section'>
           <Link to='/setaccntwithfb' style={{textDecoration:"none"}}><FaFacebookSquare className='fa' /> <span className='LogInWithFacebook'>Log in with Facebook</span></Link>
        </div>
    );
}

export default LogInWithFacebook;