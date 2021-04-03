import {Component} from 'react';
import courtService from '../../services/courtService';
import '../courtDetails/CourtDetails.css';

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
              console.log(this.state.currentCourt.image);
          })
          .catch(error => console.log(error))
      }


    render() {
        return(
            <article className="details-container">
                <img src={this.state.currentCourt.image} alt="" />
                <section className="details-section">
                    <h2>{this.state.currentCourt.name} - Detailed information</h2>
                    <p>{this.state.currentCourt.description}</p>
                    
                </section>
            </article>
        
        );
    }
}

export default CourtDetails;