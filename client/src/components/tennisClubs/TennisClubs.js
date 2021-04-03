import {useState, useEffect} from 'react';

import '../tennisClubs/TennisClubs.css';
import Court from '../court/Court';
import courtService from '../../services/courtService';
import api from '../../services/api';

const TennisClubs = ({
    courts
    
}) => {
    const [court, setCourt] = useState(courts);

    useEffect(() => {
        fetch(api.courts)
            .then(res => res.json())
            .then(result => setCourt(result))
            .catch(err => console.log(err))
    }, [courts])

    return (
        <section className="clubs-container">
            <h2>Tennis Clubs</h2>

            <ul className="court-list">

                {Object.keys(courts).map(x =>
                    <Court
                        key={x}
                        id={x}
                        name={courts[x].name}
                        address={courts[x].address}
                        image={courts[x].image}
                        price={courts[x].price}
                        description={courts[x].description}
                    />
                )}
            </ul>
        </section>
    );
}

export default TennisClubs;