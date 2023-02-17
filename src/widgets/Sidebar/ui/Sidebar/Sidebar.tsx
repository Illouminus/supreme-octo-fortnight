import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwither } from 'widgets/ThemeSwither';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
// @ts-ignore
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { Button } from '../../../../shared/ui/Button';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>{t('Toggle')}</Button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
