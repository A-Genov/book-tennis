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

                {courts.map(x =>
                    <Court
                        key={x.id}
                        id={x.id}
                        name={x.name}
                        address={x.address}
                        image={x.image}
                        price={x.price}
                        description={x.description}
                    />
                )}
            </ul>
        </section>
    );
}

export default TennisClubs;