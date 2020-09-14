import React, { Fragment } from 'react'

import { 
    ProjectWrapper, 
    ProjectImageContainer, 
    ProjectImage,
    ProjectTitle,
    ProjectContent,
    ProjectTags,
    ProjectText,
    ProjectActions


} from './project.styles'
import { HeadingTertiary, TextSecondary, TextPrimary } from '../app/app.styles'

import burgerImage from '../../assets/img/burgerscreenshot.png'

const Project: React.FC = () => {
    return (
        <Fragment>
           <ProjectWrapper>
               <ProjectImageContainer>
                   <ProjectImage src={burgerImage}></ProjectImage>
               </ProjectImageContainer>
               <ProjectContent>
                    <ProjectTitle>
                        <HeadingTertiary>SOCIAL MEDIA DASHBOARD</HeadingTertiary>
                    </ProjectTitle>
                    <ProjectTags>
                        <TextSecondary>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JS</span>
                        </TextSecondary>
                    </ProjectTags>
                    <ProjectText>
                        <TextPrimary>
                        This project entailed converting a photoshop file (PSD) to html css files that can be deployed as a static website. Some of the challenges included getting the correct fonts to match the design and coming up with a mobile view for the website as it was not provided. 
                        </TextPrimary>
                    </ProjectText>
               
                    <ProjectActions>
                        
                    </ProjectActions>
               </ProjectContent>
           </ProjectWrapper>
        </Fragment>
    )
}


export default Project