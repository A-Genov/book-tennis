import {Component} from 'react';

import courtService from './services/courtService'

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

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
        <Main courts={this.state.courts}/>
        <Footer />
      </div>
    );
  }
}

export default App;
