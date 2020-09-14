import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    padding: 20px 0;

`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`
export const LogoContainer = styled.div`


`
export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`
export const MenuItem = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;

    &:last-child{
        margin-right: 0;
    }

    @media screen and (max-width: 576px){
        margin-right: 10px;
    }

`

export const MenuLink = styled.a`
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    color: #1d3557
    font-size: 16px;

`