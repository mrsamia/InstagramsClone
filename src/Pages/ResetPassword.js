import React from 'react';
import Button from '../Components/Input/Button';
import Input from '../Components/Input/Input';
import OR from '../Components/OR';
import BlackTextButton from '../Components/BlackTextButton';
import { RiRotateLockLine } from "react-icons/ri";
function ResetPassword(props) {
    return (
        <div className='container'>
            <div className='formWrapper pad restPassformWrapper'>
                <RiRotateLockLine className='Iconsize'/>
                <div>
                    <p className='TrbleLogIn'>Trouble Logging In?</p>
                </div>
                <div>
                    <p className='txt_epu'>
                    Enter your email, phone, or username and we'll send you a link to get back into your account.
                    </p>
                </div>
                <Input name="MNE" placeholder='Email Phone or UserName' />
                <Button className="loginBtn" name="Send Login Link" />
                <OR />
                <BlackTextButton className='createNewAccnt' name="Create New Account"/>
                <div className='BackToLoginWrapper'>
                <BlackTextButton className="BackToLogin" name="Back To Login"/>
                </div>
      
            </div>
        </div>
    );
}

export default ResetPassword;