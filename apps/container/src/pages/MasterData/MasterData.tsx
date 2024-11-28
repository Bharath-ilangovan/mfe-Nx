import React, { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {

}


const MasterData = (props: Props) => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default MasterData
