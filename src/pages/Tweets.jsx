import { BtnGoBack, BtnLoadMore, Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { hendleFetchTotal, hendleFetchTweets } from 'services/api';

const Tweets = () => {
    const [isLoading, setIsloading] = useState(false);
    const [total, setTotal] = useState(null);
    const [page, setPage] = useState(1);
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        setIsloading(true);
        hendleFetchTotal()
            .then(data => {
                setTotal(data.total);
            })
            .catch(err => console.log(err.message));
        hendleFetchTweets(1, 3)
            .then(data => {
                setTweets(data);
            })
            .catch(err => console.log(err.message))
            .finally(() => {
                setIsloading(false);
            });
    }, []);

    useEffect(() => {
        if (page === 1) return;
        setIsloading(true);
        hendleFetchTweets(page, 3)
            .then(data => {
                setTweets(prevState => [...prevState, ...data]);
            })
            .catch(err => console.log(err.message))
            .finally(() => {
                setIsloading(false);
            });
    }, [page]);

    useEffect(() => {
        if (tweets.length === total) toast('Sorry, no more users found.');
    }, [tweets, total]);

    const hendleClick = () => {
        setPage(prevPage => (prevPage += 1));
    };

    return (
        <Container>
            <BtnGoBack to={'/'}>Go back</BtnGoBack>
            {isLoading && <Loader />}
            <TweetsList data={tweets} />
            {total && tweets.length < total && (
                <BtnLoadMore type="button" onClick={hendleClick}>
                    Load more
                </BtnLoadMore>
            )}
        </Container>
    );
};

export default Tweets;
