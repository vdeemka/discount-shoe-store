import React, { Component } from 'react';
import logo from '../images/logo.png';
import {FaAlignRight, FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

  state = {isOpen: false}

  handleToggle = ()=>{
    this.setState({isOpen: !this.state.isOpen})
    // console.log(state)
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-center">
          <div className='nav-header'>
            <Link to="/">
                {/* <h4>test</h4>  */}
              <img src={logo} alt='discount shoe' className='nav-logo'/>
            </Link>
            
            <button type='button' className='nav-btn' onClick={this.handleToggle}>
              <FaBars className='nav-icon'></FaBars>
            </button>
            <ul className={this.state.isOpen ? 'nav-links show-nav':'nav-links'}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shoes">Shoes</Link>
              </li>              
            </ul>
          </div>
        </div>
      </div>
    )
  }
}