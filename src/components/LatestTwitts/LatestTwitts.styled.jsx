import styled from '@emotion/styled';

export const LatestTwitsTitle = styled.h2`
    margin-bottom: 20px;
`;

export const LatestTwitsBox = styled.div`
    display: flex;
    gap: 50px;
`;

export const LatestTwitsCard = styled.article`
    flex-basis: calc((100% - 100px) / 3);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 7px 6px 34px -12px rgba(0, 0, 0, 0.62);
`;

export const UserTitle = styled.p`
    font-size: ${props => props.theme.fontSizes.large};
    text-align: center;
    margin-bottom: 20px;
`;

export const LatestTwitsWrapper = styled.div`
    display: flex;
    align-items: start;
    gap: 20px;
`;
export const LatestTwitsAvatar = styled.img`
    flex-shrink: 0;
    width: 120px;
    aspect-ratio: 1;
    border-radius: 50%;
`;
