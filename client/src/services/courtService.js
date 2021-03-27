import api from './api';

const getAll = () => {
    return fetch(api.courts)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const create = (name, address, price, description, image) => {
    let court = {
        name,
        address, 
        price, 
        description, 
        image
    }

    return fetch(api.courts, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(court)
    });
}

export default {
    getAll,
    create,
}