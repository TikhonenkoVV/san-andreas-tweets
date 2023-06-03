import { Container } from 'components/App.styled';
import {
    LatestTwitsAvatar,
    LatestTwitsBox,
    LatestTwitsCard,
    LatestTwitsTitle,
    LatestTwitsWrapper,
    UserTitle,
} from './LatestTwitts.styled';
import firstAvatar from '../../img/AmandaDeSanta.webp';
import secondAvatar from '../../img/FranklinClinton.webp';
import thirdAvatar from '../../img/TanishaJackson.webp';

export const LatestTwitts = () => {
    return (
        <Container>
            <LatestTwitsTitle>Latest twitts</LatestTwitsTitle>
            <LatestTwitsBox>
                <LatestTwitsCard>
                    <UserTitle>Amanda De Santa</UserTitle>
                    <LatestTwitsWrapper>
                        <LatestTwitsAvatar src={firstAvatar} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat esse excepturi sit accusamus dolorem,
                            aliquid nam, veritatis architecto, fuga quisquam
                            suscipit? Tenetur quos hic similique asperiores
                            nobis odio laborum odit.
                        </p>
                    </LatestTwitsWrapper>
                </LatestTwitsCard>
                <LatestTwitsCard>
                    <UserTitle>Franklin Clinton</UserTitle>
                    <LatestTwitsWrapper>
                        <LatestTwitsAvatar src={secondAvatar} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat esse excepturi sit accusamus dolorem,
                            aliquid nam, veritatis architecto, fuga quisquam
                            suscipit? Tenetur quos hic similique asperiores
                            nobis odio laborum odit.
                        </p>
                    </LatestTwitsWrapper>
                </LatestTwitsCard>
                <LatestTwitsCard>
                    <UserTitle>Tanisha Jackson</UserTitle>
                    <LatestTwitsWrapper>
                        <LatestTwitsAvatar src={thirdAvatar} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat esse excepturi sit accusamus dolorem,
                            aliquid nam, veritatis architecto, fuga quisquam
                            suscipit? Tenetur quos hic similique asperiores
                            nobis odio laborum odit.
                        </p>
                    </LatestTwitsWrapper>
                </LatestTwitsCard>
            </LatestTwitsBox>
        </Container>
    );
};
