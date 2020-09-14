import React, { Fragment } from 'react'

import { Container, TextHighlight, HeadingTertiary, HeadingPrimary, ButtonSecondary } from '../app/app.styles'
import { HeroContainer, HeroImgContainer, HeroContent, HeroImg, HeroText, HeroButton } from './hero.styles'

import HeroImgSrc from '../../assets/img/hero.png'

const Hero: React.FC = () => {
    return (
        <Fragment>
            <main>
                <Container>
                    <HeroContainer>
                        <HeroContent>
                            <HeadingPrimary>Get quality work done</HeadingPrimary>
                            <HeroText>
                                <HeadingTertiary>So, you have a <TextHighlight>WEB DEVELOPMENT</TextHighlight> project in mind? I can help you!</HeadingTertiary>
                            </HeroText>
                            <HeroButton>
                                <ButtonSecondary>See my work</ButtonSecondary>
                            </HeroButton>

                        </HeroContent>
                        <HeroImgContainer>
                            <HeroImg src={HeroImgSrc} />
                        </HeroImgContainer>  
                    </HeroContainer>
                </Container>
                
            </main>
        </Fragment>
    )
}


export default Hero