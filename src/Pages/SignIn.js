import React from 'react';
import Footer from '../Components/Footer/Footer';
import FooterItems from '../Components/Footer/FooterItems';
import Form from '../Components/Input/Form';

function SignIn(props) {
    return (
        <div>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='phoneImg'>
                <img className='screen' src={require('../Components/images/screen2.png')} />
            </div>
            <div>
                <Form />
            </div>
            
        </div>
        <div className='d-flex justify-content-center'>
        <div>
          <Footer />
        </div>
      </div>
      <div className='d-flex justify-content-center pt-2'>
        <FooterItems name="English " />
        <FooterItems name="© 2022 Instagram from Meta" />
      </div>
        </div>
    );
}

export default SignIn;