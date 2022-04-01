import React from 'react'
import {Link} from 'react-router-dom'
// import defaultImg from  '../images/shoe-1.jpeg'
import PropTypes from 'prop-types'

export default function Shoe({shoe}) {
  const {name, slug, images, price} = shoe;

  return (
    <article className='shoo'>
      <div className='img-container'>
        {/* <img src={images[0]||defaultImg} alt="single shoe"/> */}
        <img src={images[0]} alt="single shoe"/>
        <div className='price-top'>
          <h6>${price}</h6>       
        </div>
        
        <Link to={`/shoes/${slug}`} className='btn-primary shoe-link'>Details</Link>
      </div>
      <p className='shoe-info'>{name}</p>
    </article>
  )
}

Shoe.propTypes = {
  shoes:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired,
  })
}