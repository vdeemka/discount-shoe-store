import React from 'react'
import {Link} from 'react-router-dom'
// import {Button} from './Button'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faD, faLifeRing, faAmazon,  faCreditCard, faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the subscription to receive notification about our best deals!
            </p>
            <p className='footer-subscription-text'>
               You can unsubscribe at any time. 
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" 
                        name="email" 
                        placeholder='Your Email' 
                        className="footer-input"                        
                    />                       
                    {/* <Button buttonStyle='btn--outline'>Subscribe</Button> */}
                    {/* <button>Subscribe</button> */}
                    <Link to='/' className='btn-primary'>
                        Subscribe
                    </Link>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h4>About Us</h4>
                    <Link to="/">Testimonials</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Investors</Link>
                    <Link to="/">Terms of Service</Link>               
                </div>
                <div className='footer-link-items'>
                    <h4>Social Media</h4>
                    <Link to="/">Instagram</Link>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Youtube</Link>
                    <Link to="/">Twitter</Link>               
                </div>
            </div>


        </div>
        <section className='social-media'>
            {/* 1:25:00 */}
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link className='social-logo' to='/'>
                        DISCSHOE  <i> <FontAwesomeIcon icon={faD} /></i>
                    </Link>
                </div>
                <small className='website-rights'>TRVL C 2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >   
                        <i><FontAwesomeIcon icon={faCreditCard}/></i>                  
                    </Link>
                    <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >   
                        <i><FontAwesomeIcon icon={faSquareEnvelope}/></i>                        
                    </Link>                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer