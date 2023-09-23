import React from 'react';
import {MdOutlineLanguage} from 'react-icons/md';
import {useTranslation} from 'react-i18next';
import {locales} from '../../../../../extra/config/locales';

export default function SettingsLanguages() {
    const {i18n, t} = useTranslation();

  return (
      <div className='settings__buttons-language'>
          <div className='settings__labels labels'>
              <div className='labels__label-language'>
                  <MdOutlineLanguage size='24' color='black' />
                  <p className='text-inter-14-400'>{ t('settingsUser.language') }</p>
              </div>
          </div>

          <div className='settings__buttons '>
              { Object.keys(locales).map((locale =>
                  <button onClick={ () => i18n.changeLanguage(locale) }
                          className={ i18n.resolvedLanguage === locale ? 'active' : 'cursor-pointer' }
                          key={ locale }>{ locales[locale].title }</button>)) }
          </div>
      </div>
  );
}
