import React from 'react';
import {PiDoorOpen} from 'react-icons/pi';
import {setModalClose, setWindowChatClose} from '../../../../../store/actions/uiActions';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

export default function ExitChat() {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    function onExitChat() {
        localStorage.removeItem('user');
        dispatch(setModalClose())
        dispatch(setWindowChatClose())
    }

  return (
      <div className='user__buttons-exit'>
          <div className='settings__labels labels'>
              <div className='labels__label-exit'>
                  <PiDoorOpen size='24' color='black' className='cursor-pointer' onClick={onExitChat}/>
                  <p className='text-inter-14-400' onClick={onExitChat}>{ t('settingsUser.exit') }</p>
              </div>
          </div>
      </div>
  );
}
