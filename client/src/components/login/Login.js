import './Login.css'

const Login = ({
    match,
    history
}) => {

    // const onCreateClubSubmitHandler = (e) => {
        // e.preventDefault();
        // const {name, address, price, description, image} = e.target;
        // courtService.create(name.value, address.value, price.value, description.value, image.value)
            // .then(() => history.push('/courts'))
            // .catch(error => console.log(error))
    // }

    return (
        <section className="login-page-container">
            <h2>Login</h2>
            <form>
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