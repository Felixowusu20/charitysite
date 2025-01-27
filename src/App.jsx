import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import Navtab from './Components/NavBar/Navtab';
import Home from './Components/Pages/HomePage/Home';
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <Navtab />
      <div className='mt-50 '>
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App
