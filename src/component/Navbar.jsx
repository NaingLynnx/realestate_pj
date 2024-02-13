import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='l-header l-header__nav'>
        <ul>
          <li className='nav-link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Services/forsale'>ForSale</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Services/forrent'>ForRent</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Services/payment'>PaymentService</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Appointment'>Appointment</Link>
          </li>
          <li className='nav-link'>
            <Link to='/About'>About</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>


    // <nav className=''>
    //     <Link to='/'>Home</Link>
    //     <Link to='/Services/:id'>ForSale</Link>
    //     <Link to='/Services/:id'>ForRent</Link>
    //     <Link to='/Services/:id'>PaymentService</Link>
    //     <Link to='/Appointment'>Appointment</Link>
    //     <Link to='/About'>About</Link>
    //     <Link to='/Contact'>Contact</Link>
    // </nav>
  )
}

export default Navbar