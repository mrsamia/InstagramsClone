import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmailSignUp from './Pages/EmailSignUp';
import SignIn from './Pages/SignIn';
import { Routes, Route} from "react-router-dom";
import ResetPassword from './Pages/ResetPassword';
import SetAccntWithFb from './Pages/SetAccntWithFb';


function App() {
  return (
    <div className=" ">

      <Routes>
        <Route path='/' element={ <SignIn />}/>
        <Route path='/emailsignup' element={ <EmailSignUp />}/>
        <Route path='/resetPassword' element={ <ResetPassword />}/>
        <Route path='/setaccntwithfb' element={ <SetAccntWithFb />}/>
      </Routes>

    </div>
  );
}

export default App;
