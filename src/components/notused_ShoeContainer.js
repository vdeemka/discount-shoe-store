import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'

import Loading from './Loading'


function ShoeContainer({context}){
  const {loading, sortedRooms, rooms}=context;
    if(loading){
      return <Loading/>
    }
  return (
    <>
      <RoomsFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms}/>
    </>
  )
}

// export default withRoomConsumer(RoomContainer)