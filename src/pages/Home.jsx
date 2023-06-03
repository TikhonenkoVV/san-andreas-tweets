import { Section } from 'components/App.styled';
import { Hero } from 'components/Hero/Hero';
import { LatestTweets } from 'components/LatestTweets/LatestTweets';

const Home = () => {
    return (
        <>
            <Section>
                <Hero />
            </Section>
            <Section>
                <LatestTweets />
            </Section>
        </>
    );
};

export default Home;
