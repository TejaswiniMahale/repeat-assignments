import React from 'react'

const Logo = (props) => {
  return (
    <div>
        <img src={props.logo} alt="logo" className='logo'/>
    </div>
  )
}

export default Logo