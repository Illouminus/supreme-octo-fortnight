import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/input/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" placeholder={t('Введите логин')} />
            <Input type="text" placeholder={t('Введите пароль')} />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.CLEAR}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
