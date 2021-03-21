import '../main/Main.css';
import Court from '../court/Court'

const Main = ({
    courts
}) => {
    return (
        <main>
            <section className="main-container">
                <img src="tennis-bgr.png" className="main-background" alt="Tennis player background" />
                <h1 className="main-heading">Wanna book the perfect court for your game?</h1>
                <button className="main-button">Login</button>
            </section>
            <section className="court-container">
                <ul className="court-list">
                    {courts.map(x =>
                        <Court
                            key={x.id}
                            id={x.id}
                            name={x.name}
                            address={x.address}
                            image={x.image}
                            price={x.price}
                        />
                    )}
                </ul>
            </section>

        </main>
    );
}

export default Main;

// `url(${process.env.PUBLIC_URL)/assets/bg.jpg`