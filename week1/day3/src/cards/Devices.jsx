import React from 'react'

const devices = (props) => {
  return (
    <div className='device'>{props.device}-{props.system}</div>
  )
}

export default devices