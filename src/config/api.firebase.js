import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://films-607c6-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default apiFirebase;