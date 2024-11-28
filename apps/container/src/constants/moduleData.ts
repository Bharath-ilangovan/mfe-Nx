import MasterDataIcon from '../assets/moduleAssets//MasterDataIcon.svg';
import SecurityIcon from '../assets/moduleAssets//SecurityIcon.svg';
import WIPFillIcon from '../assets/moduleAssets//WIPFillIcon.svg';
import MaintenanceIcon from '../assets/moduleAssets//MaintenanceIcon.svg';
import InventoryIcon from '../assets/moduleAssets//InventoryIcon.svg';
import QMSIcon from '../assets/moduleAssets//QMSIcon.svg';
import IntegrationManagerIcon from '../assets/moduleAssets//IntegrationManagerIcon.svg';
import FlowManagerIcon from '../assets/moduleAssets//FlowManagerIcon.svg';
import DashBoardBuilderIcon from '../assets/moduleAssets//DashBoardBuilderIcon.svg';
import ARManagerFillIcon from '../assets/moduleAssets//ARManagerFillIcon.svg';
import LicenseManagerIcon from '../assets/moduleAssets//LicenseManagerIcon.svg';
import MasterDataIconLight from '../assets/moduleAssets//MasterDataIconLight.svg';
import SecurityIconLight from '../assets/moduleAssets//SecurityIconLight.svg';
import WIPFillIconLight from '../assets/moduleAssets//WIPFillIconLight.svg';
import MaintenanceIconLight from '../assets/moduleAssets//MaintenanceIconLight.svg';
import InventoryIconLight from '../assets/moduleAssets//InventoryIconLight.svg';
import QMSIconLight from '../assets/moduleAssets//QMSIconLight.svg';
import IntegrationManagerIconLight from '../assets/moduleAssets//IntegrationManagerIconLight.svg';
import FlowManagerIconLight from '../assets/moduleAssets//FlowManagerIconLight.svg';
import DashBoardBuilderIconLight from '../assets/moduleAssets//DashBoardBuilderIconLight.svg';
import ARManagerFillIconLight from '../assets/moduleAssets//ARManagerFillIconLight.svg';
import LicenseManagerIconLight from '../assets/moduleAssets//LicenseManagerIconLight.svg';
interface SideMenu {
  text: string;
  icon: string;
  iconLight: string;
  node: number;
  path: string;
}
export const MesSideMenuData: SideMenu[] = [
  {
    text: 'MASTER DATA',
    icon: MasterDataIcon,
    iconLight: MasterDataIconLight,
    node: 1,
    path: '/dashboard/masterdata',
  },
  {
    text: 'SECURITY',
    icon: SecurityIcon,
    iconLight: SecurityIconLight,
    node: 2,
    path: '/dashboard/security',
  },
  {
    text: 'WIP',
    icon: WIPFillIcon,
    iconLight: WIPFillIconLight,
    node: 3,
    path: '/dashboard/WIP',
  },
  {
    text: 'MAINTENANCE',
    icon: MaintenanceIcon,
    iconLight: MaintenanceIconLight,
    node: 4,
    path: '/dashboard/Maintenance',
  },
  {
    text: 'INVENTORY',
    icon: InventoryIcon,
    iconLight: InventoryIconLight,
    node: 5,
    path: '/dashboard/Inventory',
  },
  {
    text: 'QMS',
    icon: QMSIcon,
    iconLight: QMSIconLight,
    node: 6,
    path: '/dashboard/QMS',
  },
  {
    text: 'IIOT HUB',
    icon: InventoryIcon,
    iconLight: InventoryIconLight,
    node: 7,
    path: '/dashboard/IIOTHub',
  },
  {
    text: 'INTEGRATION MANAGER',
    icon: IntegrationManagerIcon,
    iconLight: IntegrationManagerIconLight,
    node: 8,
    path: '/dashboard/IntegrationManager',
  },
  {
    text: 'FLOW MANAGER',
    icon: FlowManagerIcon,
    iconLight: FlowManagerIconLight,
    node: 9,
    path: '/dashboard/FlowManager',
  },
  {
    text: 'DASHBOARD BUILDER',
    icon: DashBoardBuilderIcon,
    iconLight: DashBoardBuilderIconLight,
    node: 10,
    path: '/dashboard/DashboardBuilder',
  },
  {
    text: 'AR MANAGER',
    icon: ARManagerFillIcon,
    iconLight: ARManagerFillIconLight,
    node: 11,
    path: '/dashboard/ARManager',
  },
  {
    text: 'LICENSE MANAGER',
    icon: LicenseManagerIcon,
    iconLight: LicenseManagerIconLight,
    node: 12,
    path: '/dashboard/LicenseManager',
  },
];
