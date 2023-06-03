import { BtnLoadMore, Container } from 'components/App.styled';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { hendleFetchTweets } from 'services/api';

const Tweets = () => {
    const [page, setPage] = useState(1);
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        hendleFetchTweets(1, 3).then(data => {
            setTweets(data);
        });
    }, []);

    useEffect(() => {
        if (page === 1) return;
        hendleFetchTweets(page, 3).then(data => {
            console.log(data);
            setTweets(prevState => [...prevState, ...data]);
        });
    }, [page]);

    const hendleClick = () => {
        setPage(prevPage => (prevPage += 1));
    };

    return (
        <Container>
            <TweetsList data={tweets} />
            <BtnLoadMore type="button" onClick={hendleClick}>
                Load more
            </BtnLoadMore>
        </Container>
    );
};

export default Tweets;
