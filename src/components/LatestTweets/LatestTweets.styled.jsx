import styled from '@emotion/styled';

export const LatestTweetsTitle = styled.h2`
    padding: 20px 0;
    font-size: ${props => props.theme.fontSizes.large};
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        font-size: ${props => props.theme.fontSizes.xl};
    }
`;

export const LatestTweetsBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;
    }
`;

export const LatestTweetsCard = styled.article`
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

export const LatestTweetsWrapper = styled.div`
    display: flex;
    align-items: start;
    gap: 20px;
`;

export const LatestTweetsAvatar = styled.img`
    flex-shrink: 0;
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        width: 90px;
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        width: 120px;
    }
`;

export const Post = styled.p`
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 1.3;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        font-size: ${props => props.theme.fontSizes.medium};
    }
`;
