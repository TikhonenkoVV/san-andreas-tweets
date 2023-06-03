import axios from 'axios';

const instanseTweets = axios.create({
    baseURL: 'https://646bb9e57d3c1cae4ce43658.mockapi.io/tweetsDB',
});

const instanseUser = axios.create({
    baseURL: 'https://647b2490d2e5b6101db0ea1a.mockapi.io',
});

export const hendleFetchTotal = async () => {
    try {
        const { data } = await instanseTweets.get('1');
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

export const hendleFetchTweets = async (page, limit) => {
    try {
        const { data } = await instanseTweets.get(
            `/1/tweets?page=${page}&limit=${limit}`
        );
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

export const hendleFetchFollow = async id => {
    try {
        const { data } = await instanseUser.get('/follows');
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

export const hendleAddFollow = async id => {
    try {
        const { data } = await instanseUser.post('/follows', id);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

export const hendleDeleteFollow = async id => {
    try {
        await instanseUser.delete(`/follows/${id}`);
    } catch (err) {
        console.log(err.message);
    }
};
