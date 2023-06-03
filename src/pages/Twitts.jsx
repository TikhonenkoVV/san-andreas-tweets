import { Container } from 'components/App.styled';
import { TwittsList } from 'components/TwittsList/TwittsList';
import { useEffect, useState } from 'react';
import { hendleFetchTwitts } from 'services/api';

const Twitts = () => {
    const [page, setPage] = useState(1);
    const [twitts, setTwitts] = useState([]);

    useEffect(() => {
        hendleFetchTwitts(1, 3).then(data => {
            setTwitts(data);
        });
    }, []);

    useEffect(() => {
        if (page === 1) return;
        hendleFetchTwitts(page, 3).then(data => {
            console.log(data);
            setTwitts(prevState => [...prevState, ...data]);
        });
    }, [page]);

    const hendleClick = () => {
        setPage(prevPage => (prevPage += 1));
    };

    console.log(twitts);
    return (
        <Container>
            <TwittsList data={twitts} />
            <button type="button" onClick={hendleClick}>
                Load more
            </button>
        </Container>
    );
};

export default Twitts;
