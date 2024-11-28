
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import MasterData from "../pages/MasterData/MasterData";
import FactorySetup from "../pages/MasterData/FactorySetup/FactorySetup";
import AuthProvider from "./AuthProvider";
import Skills from "../pages/MasterData/FactorySetup/Skills/Skills";

// const SecurityApp = lazy(() => import("SecurityApp/app"));



const MasterDataRoute = () => (
  <Route path="masterdata" element={<MasterData />} >
    <Route path="factorysetup" element={<FactorySetup />} handle={{ crumb: () => "Factory Setup" }}>
      <Route path="skills" element={
        <Skills />} handle={{ crumb: () => "Skills" }} />
    </Route>
  </Route>
);


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthProvider />}>
      <Route path="/" element={<Login />} />
      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute />} >
        <Route path="dashboard" element={<Home />}>
          {/* Master Data Routes */}
          {MasterDataRoute()}
          {/* Security Routes */}
          <Route
            path="security"
            element={
              <Suspense fallback={<>loading...</>}>
                {/* <SecurityApp /> */}
              </Suspense>
            }
          />
          <Route path="*" element={<h1>Page Not Found SUb</h1>} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Route>
  )
);
