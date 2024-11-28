import React from "react";
import Employee from "./Employee";
import { Provider } from "react-redux";
import { masterDataStore } from "../../store/store";

interface Props { }

const EmployeeWithStore = (props: Props) => {
  return <Provider store={masterDataStore}><Employee /></Provider>;
};

export default EmployeeWithStore;
