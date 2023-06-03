import background from '../../img/background.jpg';

import {
    Decor,
    Description,
    DescriptionBox,
    HomeBox,
    HomeContainer,
    HomeTitle,
    Span,
} from './Hero.styled';

export const Hero = () => {
    return (
        <HomeContainer>
            <HomeBox>
                <HomeTitle>Welcome to San Andreas Tweets</HomeTitle>
                <DescriptionBox>
                    <Description>
                        People you know <Span />
                    </Description>
                    <Description>
                        People who know you <Span />
                    </Description>
                    <Description>
                        People who speek <Span />
                    </Description>
                </DescriptionBox>
                <Decor />
            </HomeBox>
            <HomeBox background={background} />
        </HomeContainer>
    );
};
