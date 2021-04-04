import { Component } from 'react';

import '../tennisClubs/TennisClubs.css';
import Court from '../court/Court';
import courtService from '../../services/courtService';

class TennisClubs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courts: [],
            
          }
    }

    componentDidMount() {
        courtService.getAll()
      .then(courts => {
        this.setState({ courts: courts })
      })
      .catch(error => console.log(error))
    }

render() {
    return (
        <section className="clubs-container">
            <h2>Tennis Clubs</h2>

            <ul className="court-list">
                
                {Object.keys(this.state.courts).map(x =>
                    <Court
                        key={x}
                        id={x}
                        name={this.state.courts[x].name}
                        address={this.state.courts[x].address}
                        image={this.state.courts[x].image}
                        price={this.state.courts[x].price}
                        description={this.state.courts[x].description}
                    />
                )}
            </ul>
        </section>
    );
}
}

export default TennisClubs;