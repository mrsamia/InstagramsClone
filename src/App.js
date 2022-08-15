import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmailSignUp from './Pages/EmailSignUp';
import SignIn from './Pages/SignIn';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="text-center align-items-center d-flex flex-column justify-content-center vh-100 pt-5 ">
      <Routes>
        <Route path='/' element={ <SignIn />}/>
        <Route path='/emailsignup' element={ <EmailSignUp />}/>
      </Routes>

    </div>
  );
}

export default App;
