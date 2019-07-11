import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

//using withRoomCOnsumer as higer order function here to access the context directly

const RoomContainer = ({ context }) => {
    const { loading, rooms, sortedRooms } = context
    if (loading) {
        return (<Loading />)
    }
    return (
        <React.Fragment>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </React.Fragment>
    )
}

export default withRoomConsumer(RoomContainer)

//below is with the help of renderprops
  
// const RoomContainer = () =>{
//     return(
//         <RoomConsumer>{
//             (value)=>{
//                console.log(value)
//                const { loading,rooms,sortedRooms } = value
//                if(loading){
//                    return (<Loading/>)
//                }
//                 return (
//                     <div>
//                        <RoomFilter rooms={rooms}/>
//                        <RoomList rooms={sortedRooms}/>
//                     </div>
//                 )
//             }
//         }
//         </RoomConsumer>
//     )
// }

// export default RoomContainer