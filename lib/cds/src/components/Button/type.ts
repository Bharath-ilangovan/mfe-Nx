import React from 'react';

interface IModuleBar {
  icon: string;
  color: string;
  bgColor: string;
  hoverColor?: string;
  hoverBgColor?: string;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IStandard {
  iconSrc: string;
}

interface ITopBar {
  icon: string;
}

enum ButtonVariant {
  standard = 'standard',
  topbar = 'topbar',
  moduleBar = 'moduleBar',
}

type IButton =
  | ({ variant: ButtonVariant.standard; label: string } & IStandard)
  | ({ variant: ButtonVariant.topbar; label: string } & ITopBar)
  | ({ variant: ButtonVariant.moduleBar; label: string } & IModuleBar);

export {
  IButton,
  ButtonVariant,
  IStandard as IButtonStandard,
  ITopBar as IButtonTopBar,
  IModuleBar as IButtonModuleBar,
};
