type IGetSKills = {
  id: number;
  skillsCode: string;
  skillsDescription: string;
};
interface ISkillsData {
  getSkills: IGetSKills[] | null;
}
interface ISkills {
  isLoading: boolean;
  isError: boolean;
  error: null | string;
  data: ISkillsData;
}

interface IAddSkill {
  id: number;
  name: string | undefined;
  description: string | undefined;
}

interface IAddSkillResponse {
  code: string;
  description: string;
  id: number;
  addedByUserId: number | null;
  addedDate: string; // Use string if working with ISO 8601 date strings, or Date for Date objects
  updatedByUserId: number | null;
  updatedDate: string | null; // Use string or null if the date may not exist
  events: any[]; // Adjust type based on the structure of the `events` array, e.g., specific event type
}

export {
  IGetSKills,
  ISkillsData,
  ISkills,
  IAddSkill,
  IAddSkillResponse
}