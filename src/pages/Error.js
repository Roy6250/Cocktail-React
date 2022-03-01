import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='erro-page section'>
      <div className='error-container'>
        <h1> Sorry This page doesnot exist</h1>
        <h2> Please navigate to home</h2>
        <Link to="/" className='btn btn-primary'>
          Back to Home
        </Link>
      </div>

    </section>
  )
}

export default Error
