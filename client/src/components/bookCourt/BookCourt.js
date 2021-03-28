import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { render } from 'react-dom';

function timeSlotValidator(slotTime) {
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

const handleScheduled = dateTime => {
    console.log('scheduled: ', dateTime);
};

const BookCourt = ({
    match,
    history
}) => {
    // console.log(match.params.courtId);
    return (
        <section>
            <h2>Book Court page</h2>
            <DayTimePicker 
                timeSlotSizeMinutes={60}
                timeSlotValidator={timeSlotValidator}
                onConfirm={handleScheduled}
            />
        </section>

    );
}

const target = document.getElementById('root');
render(<BookCourt />, target);

export default BookCourt;