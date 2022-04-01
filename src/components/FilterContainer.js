import React from 'react'
import ShoeFilter from './ShoeFilter'
import ShoeList from './ShoeList'
import { useGlobalContext } from '../context' 
import Loading from './Loading'


function FilterContainer(){
  const {state}=useGlobalContext();
  const {loading, sortedShoes, shoes}=state;

    if(loading){
      return <Loading/>
    }
  return (
    <>
      <ShoeFilter shoes={shoes}/>      
      <ShoeList shoes={sortedShoes}/>
    </>
  )
}

export default FilterContainer