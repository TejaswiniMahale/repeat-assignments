import React from 'react'

import "./App.css"
import Date from './cards/Date'
import Heading from './cards/Heading'
import Subheading from './cards/Subheading'
import Devices from './cards/Devices'
import Logo from './cards/Logo'
const App = () => {
  return (
    <>
     
      <div className='mainDiv'>
        <div>
        <Date  date="1/1/2000"/>
      <button className='buttonDiv'>Case Study</button>
      <Heading  heading="Amazon Gift"/>
      <Subheading  subHead="Pay"/>
      <Devices  device="Desktop" system="Mobile"/>
        </div>
        <div>
          <Logo  logo="https://cdn.iconscout.com/icon/free/png-512/amazon-1543560-1306063.png
"/>
          
        </div>
      </div>
    </>
  )
}

export default App