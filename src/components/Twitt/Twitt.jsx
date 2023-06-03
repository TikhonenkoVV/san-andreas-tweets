import {
    BottomBox,
    BtnFollow,
    PhotoFrameBox,
    TopBox,
    TwittCard,
    TwittLogo,
    TwittStats,
} from './Twitt.styled';
import logo from '../../img/sprite.svg';
import { Icon } from 'components/Icon/Icon';
import img from '../../img/twitt-background.png';
import { PhotoFrame } from 'components/PhotoFrame/PhotoFrame';

export const Twitt = ({ data }) => {
    return (
        <>
            {data.map(({ id, avatar, twitts, folowers }) => {
                return (
                    <TwittCard key={id}>
                        <TopBox>
                            <TwittLogo>
                                <Icon
                                    w={76}
                                    h={22}
                                    use={`${logo}#twitt-logo`}
                                />
                            </TwittLogo>
                            <img src={img} alt="art" />
                            <PhotoFrameBox>
                                <PhotoFrame photo={avatar} />
                            </PhotoFrameBox>
                        </TopBox>
                        <BottomBox>
                            <TwittStats>777 tweets</TwittStats>
                            <TwittStats>100,501 Followers</TwittStats>
                            <BtnFollow type="button">Following</BtnFollow>
                        </BottomBox>
                    </TwittCard>
                );
            })}
        </>
    );
};
