import React from 'react';
import { Link } from 'react-router-dom';

export const SignUpPageData = {
    link: '/emailsignup',
    name: 'Sign up',
    heading:"Don't have an account?"
}

export const SignInPageData = {
    link: '/',
    name: 'Log in',
    heading:"Have an account?"
}



function DontHaveAccnt(props) {
    const data = props.variant === 'LOGIN' ? SignUpPageData : SignInPageData

    return (
        <div className='formWrapper '>
            <span className='DontHaveAccnt'>{data.heading}</span><Link to={data.link} style={{textDecoration:"none"}}><span className={props.className}>{data.name}</span></Link>
        </div>
    );
}

export default DontHaveAccnt;