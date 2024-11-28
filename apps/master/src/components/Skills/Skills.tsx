import { Grid2, Box, TextField, Button } from '@mui/material'
// import { GridItem } from '../../ui-components/styledcomponents'
import { useMasterDataAppDispatch, useMasterDataAppSelector } from '../../hooks/index'
import { selectSkills } from '../../store/features/skills/SkillsSlice'
import { Suspense, lazy, useEffect, useState } from 'react'
import { addSkill, getAllSKills } from '../../store/features/skills/SkillsAPI'
import { IAddSkill } from '../../types/skills'

const SkillsDataGrid = lazy(() => import('./GetAllSkills'));

const initialSkillState: IAddSkill = { id: 0, name: undefined, description: undefined }

const Skills = () => {
    const { data, isError, isLoading, error } = useMasterDataAppSelector(selectSkills);
    const dispatch = useMasterDataAppDispatch();

    const [skillState, setSkillState] = useState<IAddSkill>(initialSkillState)

    const handleSkillOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSkillState((prevState) => ({
            ...prevState,
            [name]: value, // Dynamically update the key based on the input's name
        }));
    };

    const handleAddSkill = async () => {
        try {
            if (!skillState.name) {
                throw new Error('Code should not be empty');
            } else if (!skillState.description) {
                throw new Error('Description should not be empty');
            } else {
                // alert(`${skillState.code} - ${skillState.description}`);
                const res = await dispatch(addSkill(skillState));
                alert(res);
                setSkillState(initialSkillState);
            }
        } catch (e: unknown) {
            // Type guard to check if the error is an instance of Error
            if (e instanceof Error) {
                alert(e.message); // Show the error message
            } else {
                alert('An unknown error occurred'); // Fallback for unknown errors
            }
        } finally {
            // setSkillState(initialSkillState);
            dispatch(getAllSKills());
        }
    };

    useEffect(() => {
        dispatch(getAllSKills());
        return () => {
            // unmount 
        }
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }} mt={1}>
            {/* component 1 - form*/}
            <Grid2 container spacing={2} p={3} direction="row" sx={{ backgroundColor: '#fff' }}>
                <Grid2 size="auto">
                    {/* <GridItem elevation={0}> */}
                        <TextField name="name" value={skillState.name || ""} label="Code" onChange={handleSkillOnChange} />
                    {/* </GridItem> */}
                </Grid2>
                <Grid2 size="auto">
                    {/* <GridItem elevation={0}> */}
                        <TextField name="description" value={skillState.description || ""} label="Description" onChange={handleSkillOnChange} />
                    {/* </GridItem> */}
                </Grid2>
                {/* to handle space */}
                <Grid2 size="grow">
                    {/* <GridItem elevation={0}></GridItem> */}
                    </Grid2>
                {/* Add SKills */}
                <Grid2 size="auto">
                    {/* <GridItem elevation={0}> */}
                        <Button variant='contained' onClick={handleAddSkill}>Add</Button>
                    {/* </GridItem> */}
                </Grid2>
            </Grid2>
            {/* component 2 - Data Grid */}
            <Grid2 container spacing={2} p={3} direction="row" sx={{ backgroundColor: '#fff' }} mt={1}>
                {isError && <div>{JSON.stringify(error)}</div>}
                <Suspense fallback={<h3>loading...</h3>}>
                    <SkillsDataGrid />
                </Suspense>
            </Grid2>
        </Box >
    )
}



export default Skills


