import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import Myprofile from './pages/Myprofile';
import Myappointments from './pages/Myappointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" component={<Doctors/>} />
      <Route path="/doctors/:speciality" component={<Doctors/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" component={<Login />} />
      <Route path="/my-profile" component={<Myprofile />} />
      <Route path="/my-appointments" component={<Myappointments />} />
      <Route path='/appointment/:docId' component={<Appointment />} />
      {/* Add more routes as needed */}
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;
