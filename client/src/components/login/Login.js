import { NotificationManager } from 'react-notifications';

import {auth} from '../../utils/firebase';
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
        .then((userCredential) => {
            history.push('/');
            NotificationManager.success('You have logged in successfully!', 'Successful!', 2000);
        })
        .catch(error => {
            console.log(error);
            NotificationManager.error(`${error.message}`, 'Error!');
        })
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