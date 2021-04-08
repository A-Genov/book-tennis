import { Component } from 'react';
import { useState, useEffect } from 'react';

import '../tennisClubs/TennisClubs.css';
import Court from '../court/Court';
import courtService from '../../services/courtService';


const TennisClubs = ({
    courts,
}) => {
    const [currentCourts, setCourts] = useState([]);

    useEffect(() => {
        let mounted = true;
        if (currentCourts.length) {
            return;
        }

        courtService.getAll()
            .then(courts => {
                if (mounted) {
                    setCourts(courts);
                }
            })
            .catch(error => console.log(error))
            return () => mounted = false;
        
    }, [currentCourts]);


        return (
            <section className="clubs-container">
                <h2>Tennis Clubs</h2>

                <ul className="court-list">

                    {Object.keys(currentCourts).map(x =>
                        <Court
                            key={x}
                            id={x}
                            name={currentCourts[x].name}
                            address={currentCourts[x].address}
                            image={currentCourts[x].image}
                            price={currentCourts[x].price}
                            description={currentCourts[x].description}
                        />
                    )}
                </ul>
            </section>
        );
    }


export default TennisClubs;