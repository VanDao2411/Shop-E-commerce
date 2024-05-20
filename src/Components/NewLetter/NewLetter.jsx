import React from 'react'
import './NewLetter.css'

function NewLetter() {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="">  
            <input type='email' placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter