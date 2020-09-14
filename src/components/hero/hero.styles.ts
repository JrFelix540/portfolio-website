import styled from 'styled-components'

export const HeroWrapper = styled.section`
    margin: 20px 0;
`

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;


`

export const HeroImgContainer = styled.div`

`
export const HeroImg = styled.img`
    width: 600px;
    height: auto;
    @media screen and (max-width: 1200px){
        width: 400px;
    }
    @media screen and (max-width: 576px){
        display: none;
    }

`

export const HeroContent = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    padding-top: 50px;

    @media screen and (max-width: 1200px){
        padding:0 40px;
    }

    @media screen and (max-width: 980px){
        padding-right: 10px;
    }
    @media screen and (max-width: 576px){
        padding: 0;
    }
`



export const HeroText = styled.div`
    margin: 30px 0;
`

export const HeroButton = styled.div`

`