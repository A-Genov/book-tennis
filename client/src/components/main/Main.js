import '../main/Main.css'

const Main = () => {
    return (
        <section className="main-container">
            <img src="tennis-bgr.png" className="main-background" alt="Tennis player background" />
            <h1 className="main-heading">Wanna book the perfect court for your game?</h1>
            <button className="main-button">Login</button>
        </section>
    );
}

export default Main;

// `url(${process.env.PUBLIC_URL)/assets/bg.jpg`