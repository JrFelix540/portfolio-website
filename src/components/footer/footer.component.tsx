import React, { Fragment } from 'react'

import { FooterWrapper, FooterText } from './footer.styles'

const Footer: React.FC = () => {
    return (
        <Fragment>
            <FooterWrapper>
                <FooterText>&copy;2020 Junior Felix</FooterText>
            </FooterWrapper>
        </Fragment>
    )
}


export default Footer