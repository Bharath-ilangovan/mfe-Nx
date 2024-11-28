import { Stack } from '@mui/material'
// import CDSProgressContainer from '../../../components/CDSProgressContainer/CDSProgressContainer'
import { Outlet } from 'react-router-dom'


interface Props {

}

const FactorySetup = (props: Props) => {
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            {/* <CDSProgressContainer icon={undefined} /> */}
            <Stack sx={{ px: '1vw' }}><Outlet /></Stack>
        </Stack>
    )
}

export default FactorySetup
