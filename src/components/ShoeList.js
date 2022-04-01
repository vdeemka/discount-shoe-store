import React from 'react'
import Shoe from './Shoe'

export default function ShoeList({shoes}) {
  if(shoes.length===0){
    return(
      <div className='empty-search'>
        <h3>unfortunately no shoes matched your search paramenters</h3>
      </div>
    )
  }
  return (
    <section className='shoesList'>
      <div className='shoesList-center'>
        {shoes.map((x)=>{
          return <Shoe key={x.id} shoe={x}/>
        })}
      </div>
    
    </section>
  )
}
