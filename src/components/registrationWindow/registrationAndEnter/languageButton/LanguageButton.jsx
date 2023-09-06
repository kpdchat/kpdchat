import React from 'react';
import {useTranslation} from 'react-i18next';

const locales = {
    en: { title: 'EN' },
    ua: { title: 'UA' },
};

export default function LanguageButton() {
    const { i18n } = useTranslation()

    return (
        <div className='language-buttons'>
            {Object.keys(locales).map((locale => <button onClick={() => i18n.changeLanguage(locale)} className={i18n.resolvedLanguage === locale ? 'active' : 'default'} key ={locale}>{locales[locale].title}</button>))}
        </div>
    );
}
