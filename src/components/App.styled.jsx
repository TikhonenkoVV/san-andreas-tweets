import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainStyled = styled.main`
    height: 100%;
    padding-top: 60px;
    padding-bottom: 20px;
    flex-grow: 1;
    overflow: scroll;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        padding-top: 110px;
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        padding-bottom: 50px;
    }
`;

export const Section = styled.section`
    width: 100%;
`;

export const Container = styled.div`
    width: 100%;

    padding-left: ${props => props.theme.spacing.step * 5}px;
    padding-right: ${props => props.theme.spacing.step * 5}px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${props => props.theme.breakpoints.s}) {
        width: ${props => props.theme.breakpoints.s};
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        width: ${props => props.theme.breakpoints.m};
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        width: ${props => props.theme.breakpoints.l};
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    gap: 20px;
    max-width: 450px;
    margin: 0 auto;
    padding-top: 20px;
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        gap: 50px;
        padding-top: 50px;
    }
`;

export const BtnGoBack = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 196px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    text-transform: uppercase;
    color: #373737;
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 600;
    background-color: ${props => props.theme.colors.text};
    transition: background-color 250ms, color 250ms;
    flex-basis: calc((100% - 20px) / 2);
    &:hover {
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.hover};
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        font-size: ${props => props.theme.fontSizes.large};
    }
`;

export const BtnLoadMore = styled.button`
    display: block;
    width: 196px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    text-transform: uppercase;
    color: #373737;
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 600;
    background-color: ${props => props.theme.colors.text};
    transition: background-color 250ms, color 250ms;
    &:hover {
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.hover};
    }
`;
