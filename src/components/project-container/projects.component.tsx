import React, { Fragment } from 'react'


import { ProjectWrapper, ProjectHeading, ProjectSubheading, ProjectsContainer } from './projects.styles'

import { Container, HeadingSecondary, HeadingTertiary } from '../app/app.styles'

import { Project } from '../index'

const Projects: React.FC = () => {
    return (
        <Fragment>
            <ProjectWrapper>
                <Container>
                    <ProjectHeading>
                        <HeadingSecondary>Projects</HeadingSecondary>
                    </ProjectHeading>
                    <ProjectSubheading>
                        <HeadingTertiary>Front-end Web Development</HeadingTertiary>
                    </ProjectSubheading>
                    <ProjectsContainer>
                        <Project />
                        <Project />
                        <Project />
                    </ProjectsContainer>
                </Container>
            </ProjectWrapper>


            
        </Fragment>
    )
}


export default Projects