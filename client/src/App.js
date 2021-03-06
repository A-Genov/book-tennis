import { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { auth } from './utils/firebase';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import courtService from './services/courtService'

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreateCourt from './components/createCourt/CreateCourt';
import CourtDetails from './components/courtDetails/CourtDetails';
import BookCourt from './components/bookCourt/BookCourt';
import Main from './components/main/Main';
import About from './components/about/About';
import TennisClubs from './components/tennisClubs/TennisClubs';
import Contacts from './components/contacts/Contacts';
import './utils/firebase';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courts: [],
      user: null
    }
  }
  
  

  componentDidMount() {
    this._isMounted = true;
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if (this._isMounted) {
          this.setState({ user: authUser })
          // console.log('Logged in');
        // }

      } else {
        // if (this._isMounted) {
          this.setState({ user: null })
          // console.log('Logged out');

        // }
      }
    })

    courtService.getAll()
      .then(courts => {
        this.setState({ courts: courts })
      })
      .catch(error => console.log(error))
  }

  // componentWillUnmount() {
    // this._isMounted = false;
  // }


render() {
  return (
    <div className="App">
      <Header isAuthenticated={Boolean(this.state.user)}/>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route
          path="/"
          exact
          render={(props) =>
            <Main {...props} isAuthenticated={Boolean(this.state.user)} courts={this.state.courts} />
          }

        />
        <Route
          path="/courts"
          exact
          render={(props) =>
            <TennisClubs {...props} isAuthenticated={Boolean(this.state.user)} courts={this.state.courts} />
          }

        />

        <Route 
          path="/courts/create" 
          exact 
          render={(props) => 
            <CreateCourt {...props} isAuthenticated={Boolean(this.state.user)} courts={this.state.courts} />
          } />
        <Route path="/courts/details/:courtId" exact component={CourtDetails} />
        <Route path="/courts/book/:courtId" exact component={BookCourt} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/logout" render={(props) => {
          auth.signOut()
          .then(() => props.history.push("/"))
          .catch((error) => console.log(error))
          
        }} />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
      <NotificationContainer />
      <Footer isAuthenticated={Boolean(this.state.user)} />
    </div>
  );
}
}

export default App;
