import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Title = ({
    title = "ChatApp",
    description = "This is chat app made on top of react"
}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title> {title}</title>
                <meta name='description' content={description} />
            </Helmet>
        </HelmetProvider>
    )
}

export default Title
