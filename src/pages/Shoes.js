import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import FilterContainer from '../components/FilterContainer'

const Shoes = () => {
  return (<>
    <Hero hero='shoesHero'>
      <Banner title='our shooe collection!' >
        <Link to='/' className='btn-primary'>
          back home
        </Link>
      </Banner>
    </Hero>
    <FilterContainer/>
  </>)
}

export default Shoes;