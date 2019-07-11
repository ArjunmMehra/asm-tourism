import React, { Component } from 'react';
import items from './data'
const RoomContext = React.createContext()


class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        price: 0,
        minPrice: 0,
        maxprice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    componentDidMount() {
        const rooms = this.formatData(items)
        const featuredRooms = rooms.filter(room => room.featured)
        const maxPrice= Math.max(...rooms.map(item => item.price))
        const maxSize= Math.max(...rooms.map(item=>item.size))
        this.setState(()=>{
            return { 
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice: maxPrice,
                maxSize: maxSize
            }
        })
    }
    formatData(items){
        const tempItems = items.map( item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {...item.fields, images, id}
            return room
        })
        return tempItems
    }

    getRoom= (slug) =>{
        let tempRooms = [...this.state.rooms]
        return tempRooms.find((room)=>room.slug===slug)
    }

    handleChange= event=>{
        const type= event.target.type
        const name= event.target.name
        const value= event.target.value
        console.log(type,name,value)
    }

    filterRoom= ()=>{
        console.log('Hello')
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange:this.handleChange}}>
                { this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component){
    return function consumerWrapper(props){
        return<RoomConsumer > 
            {
                (value) =>{
                    return <Component {...props} context = {value}/>
                }
            }
        </RoomConsumer>
    }
}

export  { RoomProvider, RoomConsumer, RoomContext }