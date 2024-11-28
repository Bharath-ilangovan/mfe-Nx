import React from 'react'
import { Provider } from 'react-redux'
import { masterDataStore } from '../../store/store'
import Skills from './Skills'

interface Props {

}

const SkillsWithStore = (props: Props) => {
    return (
        <Provider store={masterDataStore}>
            <Skills />
        </Provider>
    )
}

export default SkillsWithStore
