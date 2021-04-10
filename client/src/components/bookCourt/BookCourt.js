import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { NotificationManager } from 'react-notifications';

import { Component } from 'react';

import courtService from '../../services/courtService';
import '../bookCourt/BookCourt.css';

class BookCourt extends Component {
    // _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            courts: [],
            currentCourt: {}
        }

        // this.changeCourt = this.changeCourt.bind(this);
    }

    // changeCourt() {
        // if (!this.state.currentCourt.booked) {
            // this.setState(this.state.currentCourt.booked = [])
        // }
    // }

    componentDidMount() {
        // this._isMounted = true;
        courtService.getOne(this.props.match.params.courtId)
            .then(currentCourt => {
                    this.setState({ currentCourt: currentCourt })
                
            })
            .then(() => {
                if (!this.state.currentCourt.booked) {
                    this.setState(prevState => ({currentCourt: {
                        ...prevState.currentCourt,
                        booked: []
                    }}))
                }
            })
            .catch(error => console.log(error))
    }


    componentWillUnmount() {
        // this._isMounted = false;
    }


    // timeSlotValidator = (slotTime) => {
    // console.log(this.state.currentCourt.booked[0]);
    // 
    // let timeValidation = [];
    // if(this.state.currentCourt.booked) {
    // this.state.currentCourt.booked.map(
    // x => {
    // let bookedTime = new Date(x)
    // console.log(bookedTime);
    // console.log(slotTime.getTime());
    // const isValid = slotTime.getTime() != bookedTime.getTime();
    // timeValidation.push(isValid)
    // }
    // 
    // )
    // }

    // return timeValidation[3]
    // }



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
        // if (!this.state.currentCourt.booked) {
            // changeCourt() {
                // this.setState()
            // }
            // this.state.currentCourt.booked = []
        // }

        // console.log(this.state.currentCourt.booked);
        const isBooked = this.state.currentCourt.booked.includes(dateTime.toISOString());
        if (!isBooked) {
            this.state.currentCourt.booked.push(dateTime);
            courtService.book(this.props.match.params.courtId, this.state.currentCourt.booked);
            this.props.history.push('/courts');
            NotificationManager.success('Booked successfully! Enjoy the game!', 'Successful!', 2000);

        } else {
            new Error('This slot is not availale');
            NotificationManager.error('This slot is not availale', 'Error!');
        }

    };

    render() {
        return (
            <section className="booking-container">
                <h2>{this.state.currentCourt.name} - Book Court</h2>
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
{/* <h2>Book Court page</h2> */ }

{/* <DayTimePicker  */ }
// timeSlotSizeMinutes={60}
// timeSlotValidator={timeSlotValidator}
// onConfirm={handleScheduled}
// />
{/* </section> */ }
//
    // );
// }
// 
// const target = document.getElementById('root');
// render(<BookCourt />, target);
// 
// export default BookCourt;