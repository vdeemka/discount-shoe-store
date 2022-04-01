import React from 'react'
import { useGlobalContext } from '../context' 
import Title from '../components/Title'

//get all unique values
const getUnique = (items,value)=>{
  return [...new Set(items.map(x=> x[value]))]
}


export default function ShoeFilter({shoes}) {
  const {state,handleChange}=useGlobalContext();
  const {size, price, type, minPrice,maxPrice,minSize, maxSize
  } = state;

  //get unique types
  let types = getUnique(shoes,'type' )
    types = ['all',...types]
    //map to jsx  
    types = types.map((x,index)=>{
      return <option value={x} key={index}>{x}</option>      
    })

  let sizes = getUnique(shoes,'size' )
  sizes = ['all',...sizes]
  sizes = sizes.map((x,index)=>{
    return <option value={x} key={index}>{x}</option>      
  })

  return (
    <div className='filter-container'>
    <Title title='search shoes'/>
    <form className='filter-form'>
      {/* --- sleect type --- */}
      <div className='form-group'>
        <label htmlFor='type'>shoe type</label>
        <select 
          name='type' 
          id='type' 
          value={type}
          className='form-control'
          onChange={handleChange}>
          {types}
        </select>
      </div>
      {/* ---> end select type <--- */}     
      {/* --- shoe price --- */}
      <div className='form-group'>
        <label htmlFor='price'>
          price ${price}
        </label>
        <input type='range' name='price' min={minPrice}
          max={maxPrice} id='price' value={price} onChange={handleChange}
          className="form-control"          
        />
      </div>
      {/* ---> end shoe price <--- */}     
      {/* --- size new ---  */}
      <div className='form-group'>
        <label htmlFor='size'>shoe size</label>
        <select 
          name='size' 
          id='size' 
          value={size}
          className='form-control'
          onChange={handleChange}>
          {sizes}
        </select>
      </div>      
      {/* ---> end of size <--- */}       
            
    </form>
    </div>
  )
}
