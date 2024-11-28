import { selectSkills } from "../../store/features/skills/SkillsSlice";
import { useMasterDataAppSelector } from "../../hooks/index";
import { IGetSKills } from "../../types/skills";


const GetAllSkills = () => {
    const { data } = useMasterDataAppSelector(selectSkills);
    if (!data.getSkills) {
        return null;
    } else {
        return data.getSkills.map((item: IGetSKills) => <li key={item.id}>{item.skillsCode} - {item.skillsDescription}</li>)
    }
}

export default GetAllSkills
