import React, { Component } from 'react';
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {

    state= {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'free cocktail',
                info: 'free cocktail is available in the evening time'
            },
            {
                icon: <FaHiking/>,
                title: 'endless hiking',
                info: 'endless hiking you can enjoy'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'free shuttle',
                info: 'free shuttle to sightseeing'
            },
            {
                icon: <FaBeer/>,
                title: 'strong beer',
                info: 'drinks available at suitable prices'
            }
        ]
    }

    render() {
        return (
            <section className="services">
               <Title title="services"/>
                 <div ref="serv" className="services-center">
                    {this.state.services.map((item, index)=> {
                        return (
                        <article className="service" key={index}>
                            <span>{ item.icon }</span>
                            <h6>{ item.title }</h6>
                            <p>{ item.info }</p>
                        </article>
                 )
               })}
            </div>
            </section>
        );
    }
}

export default Services;