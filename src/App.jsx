import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from "react-scroll-to-top";
import { PiArrowCircleUpLight } from "react-icons/pi";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTop className='tooltip' data-tip="Back to Top" color='green' smooth component={<PiArrowCircleUpLight className='text-3xl ml-[5px]' />} />
    </>
  )
}

export default App
