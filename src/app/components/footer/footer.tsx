import React from 'react'
import "./footer.scss"


export default function footer() {
  return (
    <footer>
      <div className="container">
          <ul className="text">
              <li>Home</li>
              <li>About</li>
              <li>Product</li>
              <li>specifications</li>
              <li className='end'>
                  <i className="fa-brands fa-whatsapp"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-telegram"></i>
              </li>
          </ul>
      </div>
    </footer>
  )
}
