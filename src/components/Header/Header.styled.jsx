import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo.svg';
import logoMobile from '../../img/logo-m.svg';

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${props => props.theme.colors.accent};
    box-shadow: 0px 7px 5px 1px rgba(131, 147, 222, 1);
    z-index: 2;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    height: 40px;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        height: 70px;
    }
`;

export const Logotype = styled(Link)`
    display: flex;
    width: 100px;
    height: 100%;
    aspect-ratio: 2 / 1;
    background-image: url(${logoMobile});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        background-image: url(${logo});
        width: 120px;
        aspect-ratio: 1.2857 / 1;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: auto;
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 100%;
    color: ${props => props.theme.colors.lightText};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.text};
    }

    &.active {
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.hover};
        /* pointer-events: none; */
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        width: 100px;
        font-size: ${props => props.theme.fontSizes.large};
    }
`;

export const ThemeBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.hover};
`;
