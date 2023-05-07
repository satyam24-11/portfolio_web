import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
        <h1 className="footer__title">Satyam</h1>


     <ul className="footer__list">
        <li>
            <a href="#about" className="footer__link">About</a>
        </li>

         <li>
            <a href="#poerfolio" className="footer__link">Portfolio</a>
        </li>

         <li>
            <a href="#qualififcation" className="footer__link">Qualification</a>
        </li>
     </ul>

     <div className="footer__social">

         <a 
    href="https://www.facebook.com/" 
    className="footer__social-link"
     target="_blank">
        <i class="uil uil-facebook-messenger-alt"></i>
    </a>

     <a
      href="https://www.instagram.com/"
       className="footer__social-link" 
       target="_blank">
        <i class="uil uil-instagram"></i>
     </a>

      <a 
      href="https://twitter.com/"
       className="footer__social-link" 
       target="_blank">
        <i class="uil uil-twitter-alt"></i>
      </a>
     </div>

     <span className="footer__copy">&#169; crypticalcoder. All rights reserved
     </span>
    </div>
  )
}

export default Footer