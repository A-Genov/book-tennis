import api from './api';

const getAll = () => {
    return fetch(api.courts)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export default {
    getAll,
}