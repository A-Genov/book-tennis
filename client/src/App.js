import {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom'

import courtService from './services/courtService'

import Header from './components/header/Header';
import CreateCourt from './components/createCourt/CreateCourt';
import CourtDetails from './components/courtDetails/CourtDetails';
import BookCourt from './components/bookCourt/BookCourt';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';
import About from './components/about/About';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      courts: []
    }
  }

  componentDidMount() {
    courtService.getAll()
      .then(courts => {
        this.setState({courts})
      })
      .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" exact component={About}/>
          <Route 
            path="/" 
            exact
            render={() => 
              <Main courts={this.state.courts} />
            } 
          
          />
          <Route path="/courts/create" exact component={CreateCourt}/>
          <Route path="/courts/details/:courtId" exact component={CourtDetails}/>
          <Route path="/courts/book/:courtId" exact component={BookCourt}/>
        </Switch>
        {/* <Main courts={this.state.courts}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
