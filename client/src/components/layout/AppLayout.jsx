import React, { lazy } from 'react'


const Header = lazy(
  () => import("./Header")
)

const Title = lazy(
  () => import("../shared/Title")
)

const AppLayout = () => (WrappedComponents) => {
    return (props) => {
        return (
            <div >
                <Title />
                <Header />
                <WrappedComponents {...props} />
            </div>
        )
    }
}

export default AppLayout
