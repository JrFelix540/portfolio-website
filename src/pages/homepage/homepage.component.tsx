import React, { Fragment } from 'react'

import {Header, Hero, Projects, Footer} from '../../components'

const HomePage: React.FC = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <Projects />
            <Footer />
        </Fragment>
    )
}


export default HomePage