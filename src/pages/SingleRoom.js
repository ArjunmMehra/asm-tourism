import React, { Component } from 'react';
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

class SingleRoom extends Component {
    constructor (props){
        super(props)
        this.state = {
            slug: this.props.match.params.type
        }
    }

    static contextType = RoomContext
    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if(!room){
            return <div className="error">
                <h3>No rooms could be found...</h3>
                <Link to='/rooms' className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
        return (
            <React.Fragment>
                <StyledHero image={images[0]}>
                    <Banner title={`${name} room`}>
                        <Link className="btn-primary" to="/rooms">
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                       { images.map((img, index)=><img alt={name} src={img} key={index}/>)}
                    </div>
                    <div className="single-room-info">
                        <article>
                            <h1>Details</h1>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: ${size} SQFT</h6>
                            <h6>
                                max capacity : {
                                    capacity > 1 ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>
                                { pets? "Pets allowed" : "Pets not allowed"}
                            </h6>
                            <h6>
                                {breakfast&&"free breakfast available"}
                            </h6>
                        </article>
                    </div>
                </section> 
                <section className="room-extras">
                    <h3>extras</h3>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

export default SingleRoom;