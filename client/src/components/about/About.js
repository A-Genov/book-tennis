import '../about/About.css';

const About = (props) => {
    return (
        <article className="about-container">
            <img src="/About-us.png" alt="Tennis racket and balls" />
            <section className="about-section">
                <h2>About us</h2>
                <p>The main focus of Reserve Tennis is the development of sports through technology. Our motivation is to make tennis more accessible by facilitating the process of booking a court, finding a partner or coach for a more enjoyable game as easy as possible.</p>
                <p>We build partnerships with the tennis clubs in the country and together we make the experience of the players pleasant and comfortable. Reserve Tennis works with the most promising and developing clubs in the country, which strive for constant innovation in their services and improvement of customer service.</p>
            </section>
        </article>


    );
}

export default About;