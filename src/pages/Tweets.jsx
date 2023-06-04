import {
    BtnGoBack,
    BtnLoadMore,
    BtnWrapper,
    Container,
} from 'components/App.styled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
    hendleAddFollow,
    hendleDeleteFollow,
    hendleFetchFollow,
    hendleFetchTotal,
    hendleFetchTweets,
} from 'services/api';

const Tweets = () => {
    const [isLoading, setIsloading] = useState(false);
    const [total, setTotal] = useState(null);
    const [page, setPage] = useState(1);
    const [tweets, setTweets] = useState([]);
    const [folowingId, setFolowingId] = useState([]);

    useEffect(() => {
        hendleFetchFollow().then(data => {
            if (data.length > 0) {
                data.map(({ id, tweetsID }) => {
                    return setFolowingId(prevState => [
                        ...prevState,
                        { id, tweetsID },
                    ]);
                });
            }
        });
    }, []);

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

    const onFollowClick = id => {
        const i = folowingId.findIndex(val => val.tweetsID === id);
        if (i >= 0) {
            hendleDeleteFollow(folowingId[i].id);
            folowingId.splice(i, 1);
        } else {
            hendleAddFollow({ tweetsID: id }).then(({ id, tweetsID }) => {
                setFolowingId(prevstate => [...prevstate, { id, tweetsID }]);
            });
        }
    };

    const normalizeTweets = () => {
        const arr = folowingId.map(id => id.tweetsID);
        return tweets.map(tweet => {
            arr.includes(tweet.id)
                ? (tweet.following = true)
                : (tweet.following = false);
            return tweet;
        });
    };

    return (
        <Container>
            <BtnWrapper>
                <BtnGoBack to={'/'}>Go back</BtnGoBack>
                <Filter />
            </BtnWrapper>
            {isLoading && <Loader />}
            <TweetsList data={normalizeTweets()} clickFunk={onFollowClick} />
            {total && tweets.length < total && (
                <BtnLoadMore type="button" onClick={hendleClick}>
                    Load more
                </BtnLoadMore>
            )}
        </Container>
    );
};

export default Tweets;
