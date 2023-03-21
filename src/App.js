import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer'
import Products_Health from './Component/Products_Health';
import NavbarMain from './Component/Navbar';

const App = () => {
  return (
    <div>
      <NavbarMain/>
      < Products_Health/>
      <Footer/>
    </div>
  )
}

export default App;