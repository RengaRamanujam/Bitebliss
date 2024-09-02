import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Welcome to Food TN, Our ultimate destination for culinary delights! Explore a diverse array of mouthwatering dishes meticulously curated to tantalize your taste buds. From savory classics to innovative specialties, embark on a gastronomic journey with us. Savor the flavors of Food TN and elevate your dining experience today!"</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>Home</ul>
                <ul>About us</ul>
                <ul>Delivery</ul>
                <ul>Privacy policy</ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9876543210</li>
                    <li>foodtn@gamil.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © FoodTN.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer