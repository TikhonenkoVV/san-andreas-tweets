import {
    HeaderStyled,
    Logotype,
    Nav,
    NavLinkStyled,
    Wrapper,
} from './Header.styled';
import { Container } from 'components/App.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <Wrapper>
                    <Logotype to={'/'}></Logotype>
                    <Nav>
                        <NavLinkStyled to={'/'}>Home</NavLinkStyled>
                        <NavLinkStyled to={'tweets'}>Twitts</NavLinkStyled>
                    </Nav>
                </Wrapper>
            </Container>
        </HeaderStyled>
    );
};
