import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { render } from 'react-dom';
import {Component} from 'react';

import courtService from '../../services/courtService';

class BookCourt extends Component {
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

    timeSlotValidator(slotTime) {
    const eveningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      7,
      0,
      0
    );

    const isValid = slotTime.getTime() > eveningTime.getTime();
    return isValid;

    }

    handleScheduled = dateTime => {
        // console.log('scheduled: ', dateTime);
        // console.log(this.props.match.params.courtId);
        this.state.currentCourt.booked.push(dateTime);
        courtService.book(this.props.match.params.courtId, this.state.currentCourt.booked)
        // .then((res) => {
            // console.log(res);
        // })

    };

    render() {
        return(
            <section>
                <h2>Book Court page</h2>
                <p>{this.state.currentCourt.name}</p>
                <DayTimePicker 
                    currentCourt={this.state.currentCourt}  
                    timeSlotSizeMinutes={60}
                    timeSlotValidator={this.timeSlotValidator}
                    onConfirm={this.handleScheduled}
                />
                
            </section>
        );
    }
    
}

export default BookCourt;

// function timeSlotValidator(slotTime) {
    // const eveningTime = new Date(
    //   slotTime.getFullYear(),
    //   slotTime.getMonth(),
    //   slotTime.getDate(),
    //   7,
    //   0,
    //   0
    // );
    // const isValid = slotTime.getTime() > eveningTime.getTime();
    // return isValid;
// 
// }
// 
// const handleScheduled = dateTime => {
    // console.log('scheduled: ', dateTime);
// };
// 
// const BookCourt = ({
    // match,
// }) => {
    // 
    // return (
        // <section>
            {/* <h2>Book Court page</h2> */}
    
            {/* <DayTimePicker  */}
                // timeSlotSizeMinutes={60}
                // timeSlotValidator={timeSlotValidator}
                // onConfirm={handleScheduled}
            // />
        {/* </section> */}
// 
    // );
// }
// 
// const target = document.getElementById('root');
// render(<BookCourt />, target);
// 
// export default BookCourt;