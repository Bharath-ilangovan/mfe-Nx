import { ReactNode } from "react";
import { IMenuSideBarGroup } from "../types/SideBar";

export const MasterDataSideNavData: IMenuSideBarGroup[] = [
  {
    groupId: 1,
    groupTitle: "Master Data",
    children: [
      {
        pageId: 101,
        pageName: "Employees",
        // icon: <EmployeeIcon />,
        path: "/employees",
        isEnable: false,
      },
      {
        pageId: 102,
        pageName: "Item Categories",
        // icon: <ItemCategoryIcon />,
        path: "/item-categories",
        isEnable: false,
      },
      {
        pageId: 103,
        pageName: "Item Subcategories",
        // icon: <ItemSubcategoryIcon />,
        path: "/item-subcategories",
        isEnable: false,
      },
      {
        pageId: 104,
        pageName: "Item Master",
        // icon: <ItemMasterIcon />,
        path: "/item-master",
        isEnable: false,
      },
      {
        pageId: 105,
        pageName: "Accounts",
        // icon: <AccountIcon />,
        path: "/accounts",
        isEnable: false,
      },
    ],
  },
  {
    groupId: 2,
    groupTitle: "Factory Setup",
    children: [
      {
        pageId: 201,
        pageName: "Shifts",
        // icon: <ShiftIcon />,
        path: "/dashboard/masterdata/factorySetup/shifts",
        isEnable: true,
      },
      {
        pageId: 202,
        pageName: "Work Centers",
        // icon: <WorkCenterIcon />,
        path: "/work-centers",
        isEnable: false,
      },
      {  
        pageId: 203,
        pageName: "Skills",
        // icon: <SkillIcon />,
        path: "/dashboard/masterdata/factorySetup/skills",
        isEnable: true,
      },
      {
        pageId: 204,
        pageName: "Skillsets",
        // icon: <SkillSetIcon />,
        path: "/skill-sets",
        isEnable: false,
      },
      {
        pageId: 205,
        pageName: "Tool Groups",
        // icon: <ToolGroupIcon />,
        path: "/tool-groups",
        isEnable: false,
      },
      {
        pageId: 206,
        pageName: "Tools",
        // icon: <ToolIcon />,
        path: "/tools",
        isEnable: false,
      },
      {
        pageId: 207,
        pageName: "Equipment Groups",
        // icon: <EquipmentGroupIcon />,
        path: "/equipment-groups",
        isEnable: false,
      },
      {
        pageId: 208,
        pageName: "Equipment",
        // icon: <EquipmentIcon />,
        path: "/equipment",
        isEnable: false,
      },
      {
        pageId: 209,
        pageName: "Equipment Priority",
        // icon: <EquipmentPriorityIcon />,
        path: "/equipment-priority",
        isEnable: false,
      },
      {
        pageId: 210,
        pageName: "Processes",
        // icon: <ProcessIcon />,
        path: "/processes",
        isEnable: false,
      },
      {
        pageId: 211,
        pageName: "Production Lines",
        // icon: <ProductionLineIcon />,
        path: "/production-lines",
        isEnable: false,
      },
    ],
  },
  {
    groupId: 3,
    groupTitle: "Production Configuration",
    children: [
      {
        pageId: 301,
        pageName: "Manufacturing Route",
        // icon: <ManufacturingRouteIcon />,
        path: "/manufacturing-route",
        isEnable: false,
      },
      {
        pageId: 302,
        pageName: "Bill Of Materials",
        // icon: <BillOfMaterialIcon />,
        path: "/bill-of-materials",
        isEnable: false,
      },
      {
        pageId: 303,
        pageName: "Product Spec",
        // icon: <ProductSpecIcon />,
        path: "/product-spec",
        isEnable: false,
      },
    ],
  },
];
