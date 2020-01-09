import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-ad74b.firebaseio.com/'
})