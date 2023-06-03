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
import firstAvatar from '../../img/AmandaDeSanta.webp';
import secondAvatar from '../../img/FranklinClinton.webp';
import thirdAvatar from '../../img/TanishaJackson.webp';

export const LatestTweets = () => {
    return (
        <Container>
            <LatestTweetsTitle>Latest tweets</LatestTweetsTitle>
            <LatestTweetsBox>
                <LatestTweetsCard>
                    <UserTitle>Amanda De Santa</UserTitle>
                    <LatestTweetsWrapper>
                        <LatestTweetsAvatar src={firstAvatar} />
                        <Post>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat esse excepturi sit accusamus dolorem,
                            aliquid nam, veritatis architecto, fuga quisquam
                            suscipit? Tenetur quos hic similique asperiores
                            nobis odio laborum odit.
                        </Post>
                    </LatestTweetsWrapper>
                </LatestTweetsCard>
                <LatestTweetsCard>
                    <UserTitle>Franklin Clinton</UserTitle>
                    <LatestTweetsWrapper>
                        <LatestTweetsAvatar src={secondAvatar} />
                        <Post>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat esse excepturi sit accusamus dolorem,
                            aliquid nam, veritatis architecto, fuga quisquam
                            suscipit? Tenetur quos hic similique asperiores
                            nobis odio laborum odit.
                        </Post>
                    </LatestTweetsWrapper>
                </LatestTweetsCard>
                <LatestTweetsCard>
                    <UserTitle>Tanisha Jackson</UserTitle>
                    <LatestTweetsWrapper>
                        <LatestTweetsAvatar src={thirdAvatar} />
                        <Post>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat esse excepturi sit accusamus dolorem,
                            aliquid nam, veritatis architecto, fuga quisquam
                            suscipit? Tenetur quos hic similique asperiores
                            nobis odio laborum odit.
                        </Post>
                    </LatestTweetsWrapper>
                </LatestTweetsCard>
            </LatestTweetsBox>
        </Container>
    );
};
