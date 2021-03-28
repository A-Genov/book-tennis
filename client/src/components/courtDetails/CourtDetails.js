import {Component} from 'react';
import courtService from '../../services/courtService';

class CourtDetails extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          courts: [],
          currentCourt: {}
        }
      }

      componentDidMount() {
        courtService.getOne(this.props.match.params.courtId)
          .then(currentCourt => { 
              this.setState({ currentCourt: currentCourt })
          })
          .catch(error => console.log(error))
      }


    render() {
        return(
            <section>
                <h2>Details page</h2>
                <p>{this.state.currentCourt.name}</p>
            </section>
        );
    }
    
}

export default CourtDetails;