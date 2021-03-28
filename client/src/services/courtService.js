import api from './api';
import { Redirect } from 'react-router-dom';
import { render } from 'react-dom';

const getAll = () => {
    return fetch(api.courts)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const getOne = (courtId) => {
    return fetch(`${api.courts}/${courtId}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

const create = (name, address, price, description, image) => {
    let court = {
        name,
        address, 
        price, 
        description, 
        image,
        booked:[]
    }

    return fetch(api.courts, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(court)
    })
        
}

const book = (courtId, scheduledTime) => {
    return fetch(`${api.courts}/${courtId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ booked: scheduledTime })
    })
        .then(res => res.json())
        .catch(error => console.log(error)) 
}

export default {
    getAll,
    getOne,
    create,
    book,
}