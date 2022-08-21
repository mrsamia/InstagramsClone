import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmailSignUp from './Pages/EmailSignUp';
import SignIn from './Pages/SignIn';
import { Routes, Route} from "react-router-dom";
import ResetPassword from './Pages/ResetPassword';


function App() {
  return (
    <div className="text-center align-items-center d-flex flex-column justify-content-center  pt-5 main ">
      <Routes>
        <Route path='/' element={ <SignIn />}/>
        <Route path='/emailsignup' element={ <EmailSignUp />}/>
        <Route path='/resetPassword' element={ <ResetPassword />}/>
      </Routes>

    </div>
  );
}

export default App;
