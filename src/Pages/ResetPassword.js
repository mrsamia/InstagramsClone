import React from 'react';
import Button from '../Components/Input/Button';
import Input from '../Components/Input/Input';
import OR from '../Components/OR';
import BlackTextButton from '../Components/BlackTextButton';
import { VscLock } from "react-icons/vsc";
import Nav from '../Components/Nav';
import Footer from '../Components/Footer/Footer';
function ResetPassword(props) {
    return (
        <div>
            <Nav />
            <div className='text-center align-items-center d-flex flex-column justify-content-center  pt-5 main'>
                <div className='container ' style={{marginTop:" -196px"}}>
                    <div className='formWrapper pad restPassformWrapper'>
                        <div className='cardpading'>
                            <div className='d-flex justify-content-center'>
                                <div className='IconWraper'>
                                    <VscLock className='Iconsize' />
                                </div>
                            </div>
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
                            <div className='pt-3'>
                                <OR />
                            </div>
                            <BlackTextButton className='createNewAccnt' name="Create New Account" link="/emailsignup" />
                        </div>

                        <div className='BackToLoginWrapper'>
                            <BlackTextButton className="BackToLogin" name="Back To Login" link="/" />
                        </div>
                    </div>
                </div>
                <Footer limit={13}/>
            </div>
        </div>
    );
}

export default ResetPassword;