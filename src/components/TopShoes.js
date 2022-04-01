import React, { Component } from 'react'
import Loading from './Loading'
import Shoe from './Shoe'
import Title from './Title'
import { useGlobalContext } from '../context' 

export default function TopShoes() {
    const {state}=useGlobalContext();
    const {topShoes,loading} = state
  
    let tpShoes = topShoes.map((x)=>{
        return <Shoe key={x.id} shoe={x}/>
    })    

    return (
        <section className='featured-shoes'>
          <Title title = 'Shoes on Sale!!'/>
          <div className='featured-shoes-center'>
            {loading? <Loading/> : tpShoes}
          </div>
        </section>
      )
}


