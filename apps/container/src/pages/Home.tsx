import { Button, Container, Stack, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import ModuleButtons from "./ModuleButtons";
// import MesTitleBar from "../components/MesTitleBar";
// import CDSSideBar from "../components/CDSSideBar/CDSSideBar";
import { ModuleDrawer, TitleBar } from "@product-ui/cds";
import { MesSideMenuData } from "../constants/moduleData";


interface Props { }

const Home = (props: Props) => {
  const [moduleState, setModuleState] = useState<boolean>(false);
  const [activeModule, setActiveModule] = useState<string>("/dashboard/masterdata");
  const [sideBarState, setSideBarState] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSideBarToggle = () => {
    setSideBarState((prev) => !prev);
  }

  const handleSideBarClose = () => {
    setSideBarState(false);
  }

  const handleSelectModule = (path: string) => {
    setActiveModule(path);
    setModuleState(false);
    navigate(path);
  }
  const handleModuleClick = () => {
    setModuleState((prev) => !prev);
  };
  const handleModuleBarClose = () => {
    setModuleState(false);
  };

  useEffect(() => {
    navigate(activeModule);
  }, [])

  return (
    <React.Fragment>
      <TitleBar
        version={"MES x.0"}
        notification
        info
        settings
        moduleOnclick={handleModuleClick} home={false} />
      <ModuleDrawer
        handleClose={moduleState ? handleModuleBarClose : handleModuleBarClose}
        open={moduleState}
        onClose={handleModuleBarClose}
        children={
          <ModuleButtons handleSelectModule={handleSelectModule} activeModule={activeModule} />
        } />
      <div style={{ marginTop: "5vh", width: "100vw", display: 'flex', flexDirection: "row" }}>
        {/* <CDSSideBar onClick={handleSideBarToggle} onClose={handleSideBarClose} open={sideBarState} menus={<></>} /> */}
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Home;
