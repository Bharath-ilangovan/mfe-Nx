interface IMenuSideBarGroup {
  groupId: number;
  icon?: ReactNode;
  groupTitle: string;
  defaultIcon?: ReactNode | any;
  path?: string;
  children: IMenuChildren[];
}

export type IMenuChildren = {
  icon?: ReactNode | any;
  defaultIcon?: ReactNode | any;
  pageId: number;
  pageName: string;
  path: string;
  children?: MenuGroup[] | any;
  padding?: boolean;
  isEnable: boolean;
};
