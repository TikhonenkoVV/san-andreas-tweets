import {
    BottomBox,
    BtnFollow,
    PhotoFrameBox,
    TopBox,
    TweetCard,
    TweetLogo,
    TweetStats,
} from './Tweet.styled';
import logo from '../../img/sprite.svg';
import { Icon } from 'components/Icon/Icon';
import img from '../../img/twitt-background.png';
import { PhotoFrame } from 'components/PhotoFrame/PhotoFrame';
import { formatString } from 'services/numbet-to-string';

export const Tweet = ({ data }) => {
    return (
        <>
            {data.map(({ id, avatar, twitts, followers }) => {
                return (
                    <TweetCard key={id}>
                        <TopBox>
                            <TweetLogo>
                                <Icon
                                    w={76}
                                    h={22}
                                    use={`${logo}#twitt-logo`}
                                />
                            </TweetLogo>
                            <img src={img} alt="art" />
                            <PhotoFrameBox>
                                <PhotoFrame photo={avatar} />
                            </PhotoFrameBox>
                        </TopBox>
                        <BottomBox>
                            <TweetStats>
                                {formatString(twitts)} tweets
                            </TweetStats>
                            <TweetStats>
                                {formatString(followers)} Followers
                            </TweetStats>
                            <BtnFollow type="button">Following</BtnFollow>
                        </BottomBox>
                    </TweetCard>
                );
            })}
        </>
    );
};
