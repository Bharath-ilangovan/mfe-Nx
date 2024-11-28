import {
  Drawer,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC, MouseEventHandler, useState } from "react";
import { MesSideMenuData } from "../constants/moduleData";
import closeIcon from "../assets/closeBtn.svg"
import { ModuleButton } from "@product-ui/cds";

interface Props {
  handleSelectModule: (path: string) => void
  activeModule: string
}

interface SideMenu {
  text: string;
  icon: string;
  iconLight: string;
  node: number;
  path: string;
}

const ModuleButtons: FC<Props> = ({ handleSelectModule, activeModule }) => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  return <Grid2 container spacing={1} sx={{ alignItem: 'center', justifyContent: 'center' }}>
    {MesSideMenuData.map((item: SideMenu, index: number) => (
      <ModuleButton
        onClick={() => handleSelectModule(item.path)}
        icon={
          item.path === activeModule ? <img src={hoveredModule === item.path ? item.icon : item.iconLight} alt={item.text} style={{ height: '4vh', width: '4vh' }} /> :
            <img src={hoveredModule === item.path
              ? item.iconLight
              : item.icon} alt={item.text} style={{ height: '4vh', width: '4vh' }} />
        }
        onMouseEnter={() => setHoveredModule(item.path)}
        onMouseLeave={() => setHoveredModule(null)}
        color={item.path === activeModule ? "#FFF" : "#454545"}
        bgColor={item.path === activeModule ? "#002856" : "#FFF"}
        hoverBgColor={item.path === activeModule ? "#FFF" : "#002856"}
        hoverColor={item.path !== activeModule ? "#FFF" : "#454545"}
        label={item.text}
      />))}
  </Grid2>
};

export default ModuleButtons;
