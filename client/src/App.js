import {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {auth} from './utils/firebase'

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
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        this.setState({user: authUser})
        console.log('Logged in');
        
      } else {
        this.setState({user: null})
        console.log('Logged out');
      }
    })

    courtService.getAll()
      .then(courts => {
        this.setState({courts: courts})
      })
      .catch(error => console.log(error))
  }

  // componentDidMount() {
    // 
  // }

  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" exact component={About}/>
          <Route 
            path="/" 
            exact
            render={(props) => 
              <Main {...props} courts={this.state.courts} />
            } 
          
          />
          <Route 
            path="/courts" 
            exact
            render={(props) => 
              <TennisClubs {...props} courts={this.state.courts} />
            } 
          
          />

          <Route path="/courts/create" exact component={CreateCourt}/>
          <Route path="/courts/details/:courtId" exact component={CourtDetails}/>
          <Route path="/courts/book/:courtId" exact component={BookCourt}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/logout" render={props => {
            auth.signOut();
            return <Redirect to="/" />
          }}/>
        </Switch>
        {/* <Main courts={this.state.courts}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
