import '../tennisClubs/TennisClubs.css';
import Court from '../court/Court';

const TennisClubs = ({
    courts
}) => {
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