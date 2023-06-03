import axios from 'axios';

axios.defaults.baseURL = 'https://646bb9e57d3c1cae4ce43658.mockapi.io/';

export const hendleFetchTweets = async (page, limit) => {
    try {
        const { data } = await axios.get(`/tweets?page=${page}&limit=${limit}`);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};
