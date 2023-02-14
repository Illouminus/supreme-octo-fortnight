import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwither.module.scss';
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/ui/Button";

interface ThemeSwitherProps {
    className?: string;
}

export const ThemeSwither = ({className}: ThemeSwitherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwither, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ?  <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};

