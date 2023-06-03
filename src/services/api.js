import axios from 'axios';

axios.defaults.baseURL = 'https://646bb9e57d3c1cae4ce43658.mockapi.io/';

export const hendleFetchTwitts = async (page, limit) => {
    try {
        const { data } = await axios.get(`/twitts?page=${page}&limit=${limit}`);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};
