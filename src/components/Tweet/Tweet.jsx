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
import { formatString } from 'services/number-to-string';

export const Tweet = ({ data, clickFunk }) => {
    const hendleClick = (e, id) => {
        e.target.classList.toggle('active');
        const textContent = e.target.textContent;
        textContent === 'Following'
            ? (e.target.textContent = 'Follow')
            : (e.target.textContent = 'Following');
        const followersCount = Number(
            e.target.previousSibling.getAttribute('datatype')
        );
        if (e.target.classList.contains('active')) {
            e.target.previousSibling.textContent = `
            ${formatString(followersCount + 1)} Followers`;
            e.target.previousSibling.setAttribute(
                'datatype',
                followersCount + 1
            );
        } else {
            e.target.previousSibling.textContent = `
            ${formatString(followersCount - 1)} Followers`;
            e.target.previousSibling.setAttribute(
                'datatype',
                followersCount - 1
            );
        }
        clickFunk(id);
    };

    return (
        <>
            {data.map(({ id, user, avatar, twitts, followers, following }) => {
                if (following) followers += 1;
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
                            <TweetStats>{user}</TweetStats>
                            <TweetStats>
                                {formatString(twitts)} tweets
                            </TweetStats>
                            <TweetStats datatype={followers}>
                                {formatString(followers)} Followers
                            </TweetStats>
                            <BtnFollow
                                className={following && 'active'}
                                type="button"
                                onClick={e => hendleClick(e, id)}
                            >
                                {following ? 'Following' : 'Follow'}
                            </BtnFollow>
                        </BottomBox>
                    </TweetCard>
                );
            })}
        </>
    );
};
