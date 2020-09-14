import styled from 'styled-components'


export const Page = styled.div`
    background-color: #ffffff;

`

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    @media screen and (max-width: 1200px){
        max-width: 976px;
    }
    @media screen and (max-width: 980px){
        max-width: 768px;
    }
    @media screen and (max-width: 770px){
        width: auto;
        padding: 0 20px;
    }

`

export const TextSecondary = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    color: #1d3557;

`

export const TextPrimary = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #1d3557;
    line-height: 1.5;

`

export const TextHighlight = styled.span`
    text-transform: uppercase;
    font-weight: 700;
`

export const HeadingPrimary = styled.h1`
    font-size: 30px;
    font-weight: 700;
    font-family: 'Merriweather', serif;
    color: #1d3557;

    @media screen and (max-width: 980px){
        font-size: 24px;
    }
`

export const HeadingSecondary = styled.h3`
    font-size: 24px;
    font-family: 'Merriweather', serif;
    color: #1d3557;
`

export const HeadingTertiary = styled.h4`
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    color: #1d3557;

    @media screen and (max-width: 980px){
        font-size: 18px;
    }
`

export const ButtonPrimary = styled.a`
    color: #fff;
    padding:7.5px 15px;
    font-family: "Raleway", "sans-serif";
    background-color: #e63946;
    border-radius: 20px;
    font-size: 16px;

    @media screen and (max-width: 576px){
        padding: 5px 10px;
    }

`

export const ButtonSecondary = styled.a`
    color: #fff;
    padding:7.5px 15px;
    font-family: "Raleway", "sans-serif";
    background-color: #1d3557;
    border-radius: 5px;
    font-size: 16px;
`