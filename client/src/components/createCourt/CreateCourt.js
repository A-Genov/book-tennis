import { NotificationManager } from 'react-notifications';

import './CreateCourt.css'
import courtService from '../../services/courtService';
import formValidator from '../../services/formValidator'

const CreateClub = ({
    courts,
    match,
    history
}) => {

    const onCreateClubSubmitHandler = (e) => {
        e.preventDefault();
        const { name, address, price, description, image } = e.target;

        let formIsValid = formValidator([name.value, address.value, price.value, description.value, image.value]);

        if (formIsValid) {
            courtService.create(name.value, address.value, price.value, description.value, image.value)
                .then(() => console.log(courts))
                .then(() => {
                    console.log(name.value, address.value, price.value, description.value, image.value);
                })
                .then(() => {
                    history.push('/courts');
                    NotificationManager.success('Your court was created successfully!', 'Successful!', 2000);
                })
                .catch(error => {
                    console.log(error)
                    NotificationManager.error(`${error.message}`, 'Error!');
                })
        } else {
            NotificationManager.error('All fields are required', 'Error!');
        }

    }

    return (
        <section className="create-form-container">
            <h2>Create New Court</h2>
            <form onSubmit={onCreateClubSubmitHandler}>
                <p>
                    <label htmlFor="name">Court Name</label>
                    <input id="name" name="name" type="text" />
                </p>
                <p>
                    <label htmlFor="address">Address</label>
                    <input id="address" name="address" type="text" />
                </p>
                <p>
                    <label htmlFor="price">Price per hour</label>
                    <input id="price" name="price" type="number" />
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <textarea rows="5" cols="30" type="text" name="description" id="description"  ></textarea>
                </p>
                <p>
                    <label htmlFor="image">Image</label>
                    <input id="image" name="image" type="text" />
                </p>
                <p>
                    <input type="submit" value="Create My Club" id="submit" />
                </p>
            </form>
        </section>
    );
}

export default CreateClub;