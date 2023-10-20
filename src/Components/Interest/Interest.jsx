import React from 'react'
import { Link } from 'react-router-dom'
import './interest.css'

const Interest = () => {
  return (
    <>
        <div className="interest flex justify-between p-6">
            <h1>Interested in Working With Me?</h1>
            <Link to="/contact">
              <button className="button">
                <span>CONTACT NOW</span>
                <i class="fa-solid fa-phone"></i>
              </button>
            </Link>
        </div>
    </>
  )
}

export default Interest