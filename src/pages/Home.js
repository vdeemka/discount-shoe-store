import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
// import Services from '../components/Services'
import TopShoes from '../components/TopShoes'

const Home = () => {
  return (<>    
    <Hero hero='defaultHero'>
      <Banner title='luxury discounts!' subtitle='brand items as low as $99.99!'>
        <Link to='/shoes' className='btn-primary'>
          our shoes
        </Link>
      </Banner>
      
    </Hero>
    {/* <Services/> */}
    <TopShoes/>
    
  </>
  )
}

export default Home;