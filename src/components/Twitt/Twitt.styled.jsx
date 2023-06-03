import styled from '@emotion/styled';

export const TwittCard = styled.li`
    width: 374px;
    height: 460px;
    background-image: linear-gradient(
        114.99deg,
        #471ca9 -0.99%,
        #5736a3 54.28%,
        #4b2a99 78.99%
    );
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        width: 354px;
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        width: 380px;
    }
`;

export const TopBox = styled.div`
    position: relative;
    height: 222px;
    padding-top: 28px;
    padding-left: 36px;
    padding-right: 36px;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: #ebd8ff;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
            inset 0px -1.71846px 3.43693px #ae7be3,
            inset 0px 3.43693px 2.5777px #fbf8ff;
    }
`;

export const TwittLogo = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const PhotoFrameBox = styled.div`
    position: absolute;
    left: 50%;
    bottom: -36px;
    transform: translateX(-50%);
    width: 80px;
    aspect-ratio: 1;
`;

export const BottomBox = styled.div`
    padding-top: 62px;
`;

export const TwittStats = styled.p`
    margin-bottom: 16px;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.2;
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.large};
    &:nth-of-type(2) {
        margin-bottom: 26px;
    }
`;

export const BtnFollow = styled.button`
    display: block;
    width: 196px;
    height: 50px;
    margin: 0 auto;
    border-radius: 10px;
    text-transform: uppercase;
    color: #373737;
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 600;
    background-color: ${props => props.theme.colors.text};
`;
