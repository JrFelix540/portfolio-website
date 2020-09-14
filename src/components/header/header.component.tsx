import React, { Fragment } from 'react'

import { HeaderWrapper, HeaderContainer, LogoContainer, HeaderMenu, MenuItem, MenuLink } from './header.styles'
import { Container, ButtonPrimary } from '../app/app.styles'
import Logo from '../../assets/img/logo.png'

const Header: React.FC = () => {
    return (
        <Fragment>
            <HeaderWrapper>
                <Container>
                    <HeaderContainer>
                        <LogoContainer>
                            <a href="/">
                                <img src={Logo} alt=""/>
                            </a>
                        </LogoContainer>
                        <HeaderMenu>
                            <MenuItem>
                                <MenuLink>Home</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>Projects</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>
                                    <ButtonPrimary>Contact Me</ButtonPrimary>
                                    </MenuLink>
                            </MenuItem>

                        </HeaderMenu>
                    </HeaderContainer>
                </Container>
            </HeaderWrapper>
        </Fragment>
    )
}


export default Header