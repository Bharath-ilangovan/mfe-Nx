import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {

}

export default memo(function AuthProvider({ }: Props) {
    return (
        <Outlet />
    )
})
