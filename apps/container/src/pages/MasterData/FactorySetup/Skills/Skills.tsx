import React, { Suspense, lazy } from 'react'

interface Props {

}
const SkillsPage = lazy(() => import("masterdata/Skills"));

const Skills = (props: Props) => {
    return (
        <div>
            Skills
            <Suspense fallback={<div>Loading...</div>}>
                <SkillsPage />
            </Suspense>
        </div>
    )
}

export default Skills
