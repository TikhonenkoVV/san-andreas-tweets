import { Container } from 'components/App.styled';
import {
    LatestTweetsAvatar,
    LatestTweetsBox,
    LatestTweetsCard,
    LatestTweetsTitle,
    LatestTweetsWrapper,
    Post,
    UserTitle,
} from './LatestTweets.styled';
import { persons } from '../../services/data';

export const LatestTweets = () => {
    return (
        <Container>
            <LatestTweetsTitle>Latest tweets</LatestTweetsTitle>
            <LatestTweetsBox>
                {persons.map(({ id, user, avatar }) => {
                    return (
                        <LatestTweetsCard key={id}>
                            <UserTitle>{user}</UserTitle>
                            <LatestTweetsWrapper>
                                <LatestTweetsAvatar src={avatar} />
                                <Post>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Architecto quod tempore
                                    repellat? Id molestiae sit minima dolorum
                                    doloribus vero doloremque pariatur
                                    blanditiis ea unde? Molestiae error
                                    assumenda quidem similique. Corrupti.
                                </Post>
                            </LatestTweetsWrapper>
                        </LatestTweetsCard>
                    );
                })}
            </LatestTweetsBox>
        </Container>
    );
};
