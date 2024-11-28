import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../../../services/APIs";
import { getAxios, postAxios } from "../../../services/axios";
import { IAddSkill, IAddSkillResponse, IGetSKills } from "../../../types/skills/index";

export const getAllSKills = createAsyncThunk(
    "skills/getAllSKills",
    async (_, { rejectWithValue }) => {
        try {
            const skills = await getAxios<IGetSKills[]>(`${APIs.SKILLS.GET_SKILLS}`) as IGetSKills[];
            console.log(skills);
            return skills;
        } catch (err: any) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
            return rejectWithValue("Unknown error occurred while getAllParts");
        }
    }
);

export const addSkill = createAsyncThunk(
    "skills/addSkill",
    async (payload: IAddSkill, { rejectWithValue }) => {
        try {
            const response = await postAxios<IAddSkillResponse>(`${APIs.SKILLS.CREATE_OR_UPDATE_SKILLS}`, payload);
            return response;
        } catch (err: any) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
            return rejectWithValue("Unknown error occurred while getAllParts");
        }
    }
);