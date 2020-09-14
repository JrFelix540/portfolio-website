import styled from 'styled-components'

export const ProjectWrapper = styled.section`


`
export const ProjectHeading = styled.div`
    text-align: center;
    margin: 30px 0;

`

export const ProjectSubheading = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 40px;
    grid-column-gap: 40px;
    @media screen and (max-width: 980px){
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 40px;
    }

    @media screen and (max-width: 770px){
        grid-template-columns: 1fr;
    }
`