import React from 'react'

const Botton = (props) => {
  return (
    <>
      <a className={`btn ${props.class}`} href="#">{props.text}</a>
    </>
  )
}

export default Botton
