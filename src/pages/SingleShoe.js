import React, { Component, useState } from 'react'
// import defaultBcg from '../images/shoe-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link, useParams} from 'react-router-dom'
import { useGlobalContext } from '../context'  //this has been amended by me
import StyledHero from '../components/StyledHero'

function SingleShoe() {
  const params = useParams()
  const [ztate, setZtate] = useState({slug: params.slug})
  const {state, getShoe} = useGlobalContext()
  const shoe = getShoe(ztate.slug);

    if(!shoe){
      return <div className='error'>
        <h3>Sorry, .. No such shoe exists ....</h3>
        <Link to='/shoes' className='btn-primary'>
          back to shoes
        </Link>
      </div>
    }
    const {name, tye, price, style,size, materials, description, images} = shoe
    const [mainImg, ...defaultImg] = images //don't get how this works but it does work (3:09:00)

   return (<>
      {/* <StyledHero img={mainImg|| ztate.defaultBcg}> */}
      <StyledHero img={mainImg}>
        <Banner title={`${name}!`}>
          <Link to='/shoes' className='btn-primary'>
            back to shoes
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-shoe'>
        <div className='single-shoe-images'>
          {defaultImg.map((x,index)=>{
            return <img key={index} src={x} alt={name}/>
          })}
        </div>
        <div className='single-shoe-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price : <span className='price-bold'>${price}</span></h6>
            <h6>size : {size}</h6>
            <h6>materials : {materials}</h6>
          </article>
        </div>
      </section>
      </>)  
    }


export default SingleShoe;