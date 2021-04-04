import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'

import '../main/Main.css';
import Court from '../court/Court';

const Main = ({   
    courts,
    isAuthenticated
}) => {
    console.log(isAuthenticated);
    const [auth, setAuth] = useState(isAuthenticated);

    useEffect(() => {
        setAuth(auth);
    });

    return (
        <main>
            <section className="main-container">
                <img src="tennis-bgr.png" className="main-background" alt="Tennis player background" />
                {!isAuthenticated
                ?
                <>
                    <h1 className="main-heading">Wanna book the perfect court for your game?</h1>
                    <button className="btn btn-fill-gradient"><Link to="/login">Login</Link></button>
                    <button className="btn btn-outline-white"><Link to="/register">Register</Link></button>
                </>    
                :
                <>
                    <h1 className="main-heading">Start enjoying the game - book a court now</h1>
                    <button className="btn btn-fill-gradient"><Link to="/courts">Book</Link></button>
                </>
                }
                {/* <button className="main-button">Login</button> */}
            </section>
            <section className="guidelines-container">
                <h2>Initial Tennis Guideline</h2>
                <ul>
                    <li>
                        <img src="/tennis-racket.png" alt="tennis racket" />
                        <h3>Before you book a court make sure you have chosen a tennis racket properly</h3>
                        <p>For a beginner, all you really need to do is check to make sure your hand fits comfortably around the handle. The racquet shouldn't feel like it's too heavy to move, but it also shouldn't feel like it weighs nothing. There are also men's and women's racquets, but you should prioritize fit over gender in most cases.</p>
                    </li>
                    <li>
                        <img src="/tennis-balls.png" alt="tennis balls" />
                        <h3>Most tennis balls look nearly identical, yet you might be surprised how differently these round balls of fuzz can perform.</h3>
                        <p>Finding the best tennis balls for your skill set, court choice, and location can sometimes seem complicated, but soon it will be second nature. Whether you prefer the fastest tennis balls, the best spin tennis balls, or tour tennis balls, there’s no shortage of choices out there.</p>
                    </li>
                    <li>
                        <img src="/clothing.png" alt="tennis clothes" />
                        <h3>Before you buy tennis clothes, ask your gym or club if they have any clothing requirements</h3>
                        <p>For women a dress and skirt is a more traditional way to dress for tennis, and a lot of women feel that it is very comfortable to play in as well. Shorts are a little more casual, and they are usually pretty short overall. In colder weather, a player might opt for some warm-up pants to wear during that period.</p>
                    </li>
                </ul>
            </section>

        </main>  
        
    );
}

export default Main;

// `url(${process.env.PUBLIC_URL)/assets/bg.jpg`