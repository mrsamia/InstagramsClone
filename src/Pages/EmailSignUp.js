import React from 'react';
import Button from '../Components/Input/Button';
import InstagramLogo from '../Components/InstagramLogo';
import OR from '../Components/OR';
import Input from '../Components/Input/Input';
import DontHaveAccnt, { SignInPageData } from '../Components/DontHaveAccnt';
import GetTheApp from '../Components/GetTheApp';
import DwnldAppBtn from '../Components/DwnldAppBtn';
import Footer from '../Components/Footer/Footer';
import FooterItems from '../Components/Footer/FooterItems';

function EmailSignUp(props) {
    return (
        <div className='text-center align-items-center d-flex flex-column justify-content-center  pt-4 main'>
            <div className='container'>
                <div className='formWrapper'>
                    <InstagramLogo />
                    <div>
                        <p className='txt_Ptitle'>Sign up to see photos and videos from your friends.</p>
                    </div>
                    <Button className="logFbBtn" name="Log in with Facebook" />
                    <OR />
                    <Input name="MNE" placeholder='Mobile Number or Email' />
                    <Input name="fullname" placeholder="Full Name" />
                    <Input name="username" placeholder="Username" />
                    <Input name="password" placeholder='Password' />
                    <div>
                        <p className='txt_p txt_algn pt-2'>
                            People who use our service may have uploaded your contact information to Instagram. <a className='LearnMore'>Learn <br></br>More</a>
                        </p>
                    </div>
                    <div>
                        <p className='txt_p txt_algn'>
                            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                        </p>
                    </div>
                    <Button className="loginBtn" name="Sign Up" />
                </div>
                <div>
                    <DontHaveAccnt className='signUP' variant="SIGNUP" />
                    <GetTheApp />
                    <DwnldAppBtn />
                </div>
                <Footer limit={14} />
                <div className='d-flex justify-content-center'>
                    <FooterItems name="English " />
                    <FooterItems name="© 2022 Instagram from Meta" />
                </div>
            </div>

        </div>
    );
}

export default EmailSignUp;