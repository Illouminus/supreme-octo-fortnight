import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <div>
            <Button theme={ButtonTheme.OUTLINE} onClick={onThrow}>{t('Throw Error')}</Button>
        </div>
    );
};
