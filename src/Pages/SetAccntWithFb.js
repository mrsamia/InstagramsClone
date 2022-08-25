import React from 'react';
import Button from '../Components/Input/Button';
import Nav from '../Components/Nav';

function SetAccntWithFb(props) {
    return (
        <div>
            <Nav/>
        <div className='text-center align-items-center d-flex flex-column justify-content-center  pt-5 main'>
            <div className='container'>
                <div className='formWrapper RLPad'>
                    <div>
                        <h6 className='pt-3 pb-2 txt_h6'>
                            Set up your Accounts Center to sign up with Facebook?
                        </h6>
                    </div>
                    <div>
                        <p className='txt_p left_align'>
                            When you sign up with Facebook, we set up your Accounts Center and add your Facebook account and newly created Instagram account. This will enable connected experiences that make it easier to do things across accounts like using Facebook Pay, logging in with Facebook or Instagram and posting across accounts. You can manage these accounts and experiences at any time in Settings.
                        </p>
                    </div>
                    <div className='txt_p left_align'>
                        <p >If you sign up with Facebook</p>
                        <p>
                            We combine and use info across accounts in Accounts Center
                        </p>
                        <ul className='UlListStyle'>
                            <li className='pb-3' >We’ll suggest friends and accounts to follow</li>
                            <li className='pb-3' >We’ll personalize ads for you and others and measure their performance</li>
                            <li>We’ll provide more personalized features, content and suggestions</li>
                        </ul>
                        <p>
                            If you remove your account, it can take us up to 3 months to stop combining your info.
                        </p>
                    </div>
                    <div className='txt_p left_align'>
                        <p>Even if you sign up with phone or email</p>
                        <p> We use info across our products as outlined in our Privacy Policy.</p>
                        <p>We use info across all of our products to:</p>
                        <ul className='UlListStyle'>
                            <li className='pb-3'>More accurately count people and understand how they use our products</li>
                            <li> Keep you and others safe</li></ul>
                        <p>Across Instagram and Facebook, we use info to:</p>
                        <ul className='UlListStyle'>
                            <li className='pb-3' >Show personalized ads and measure their performance on Instagram and Facebook</li>
                            <li>
                                Provide more personalized features, content and suggestions on Instagram and Facebook
                            </li>
                        </ul>
                        <p>
                            On Instagram, we also use info to suggest accounts to follow.
                        </p>
                    </div>
                    <div>
                        <Button className="logFbBtn" name="Yes, finish setup" />
                    </div>
                    <div>
                        <Button name="No, sign up with phone or email" className="NoSignUpBtn"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SetAccntWithFb;