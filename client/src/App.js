import {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom'

import courtService from './services/courtService'

import Header from './components/header/Header';
import CreateClub from './components/createClub/CreateClub'
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
          <Route path="/clubs/create" exact component={CreateClub}/>
        </Switch>
        {/* <Main courts={this.state.courts}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
