import styled from '@emotion/styled';

export const MainStyled = styled.main`
    height: 100%;
    padding-top: 60px;
    flex-grow: 1;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        padding-top: 110px;
    }
`;

export const Section = styled.section`
    width: 100%;
    height: 100%;
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
