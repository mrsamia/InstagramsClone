import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Input/Form';


function App() {
  return (
    <div className="App ">
      <div className='d-flex justify-content-center align-items-center'>
        <div>
          <img src={require('./Components/images/phoneBackground.png')} />
        </div>
        <div>
          <Form />
        </div>


      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
