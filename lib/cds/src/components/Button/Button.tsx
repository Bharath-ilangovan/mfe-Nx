import React from 'react'
import { ButtonVariant, IButton, IButtonModuleBar, IButtonStandard, IButtonTopBar } from './type'
import ModuleBarButton from './Variants/ModuleBarButton'
import TopBarButton from './Variants/TopBarButton'
import DefaultButton from './Variants/DefaultButton'


const Button = (props: IButton) => {
    // switch (props.variant) {
    //     case ButtonVariant.moduleBar:
    //         return <ModuleBarButton {...(props as IButtonModuleBar)} />;
    //     case ButtonVariant.topbar:
    //         return <TopBarButton {...(props as IButtonTopBar)} />;
    //     case ButtonVariant.standard:
    //     default:
    //         return <DefaultButton {...(props as IButtonStandard)} />;
    // }
}

export default Button;
