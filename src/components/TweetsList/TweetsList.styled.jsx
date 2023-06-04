import styled from '@emotion/styled';

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;
        margin-bottom: 50px;
        padding-top: 50px;
    }
`;
