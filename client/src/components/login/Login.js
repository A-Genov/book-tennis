import {auth} from '../../utils/firebase'

import './Login.css'

const Login = ({
    match,
    history
}) => {

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => console.log(userCredential))
    }

    return (
        <section className="login-page-container">
            <h2>Login</h2>
            <form onSubmit={onLoginFormSubmitHandler}>
                <p>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" placeholder="Insert email" /> 
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="Insert password" /> 
                </p>
                <p>
                    <input type="submit" value="Login" id="submit" />
                </p>
            </form>
        </section>
    );
}

export default Login;