import styled from '@emotion/styled';
import { Container } from 'components/App.styled';

export const HomeContainer = styled(Container)`
    display: flex;
    height: 100%;
`;

export const HomeBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: end;
    flex-basis: 50%;
    height: 400px;
    padding-right: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('${props => props.background}');
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        padding-right: 40px;
        height: 576px;
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        height: 680px;
    }
`;

export const HomeTitle = styled.h1`
    display: block;
    text-align: right;
    font-weight: 900;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.large};
    font-size: ${props => props.theme.fontSizes.large};
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        font-size: ${props => props.theme.fontSizes.xxl};
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        font-size: ${props => props.theme.fontSizes.xxxl};
    }
`;

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    margin-right: -3px;
    z-index: 1;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        margin-right: -8px;
    }
`;

export const Description = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: ${props => props.theme.fontSizes.small};
    text-align: right;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        font-size: ${props => props.theme.fontSizes.medium};
    }
`;

export const Span = styled.span`
    flex-shrink: 0;
    display: block;
    width: 12px;
    aspect-ratio: 1;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #fff;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        width: 19px;
    }
`;

export const Decor = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    width: 3px;
    height: 100%;
    background-color: #000;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -12px;
        width: 3px;
        height: 185px;
        background-color: #000;
        @media (min-width: ${props => props.theme.breakpoints.m}) {
            left: -20px;
            height: 290px;
        }
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        right: 20px;
    }
`;
