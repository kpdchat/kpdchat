import React, { useRef, useState } from "react"
import KebabWrapper from "../../../../extra/KebabWrapper";
import { PiShareFat, PiCopy } from "react-icons/pi";
import { useTranslation } from 'react-i18next';

export default function MesAnotherKebab({ message }) {
    const [copy, setCopy] = useState(false)
    const menuRef = useRef()
    const { t } = useTranslation()

    function onCopyClick() {
        setCopy(true)
        navigator.clipboard.writeText(message.text)
        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }
    return (
        <KebabWrapper elRef={menuRef} >
            <div ref={menuRef} className="kebab-menu another-kebab no-select">
                <div className="another-kebab__row cursor-pointer" >
                    <PiShareFat size={20} />
                    <p className="text-inter-16-400">{t('global.answer')}</p>
                </div>
                <div onClick={onCopyClick} className="another-kebab__row cursor-pointer">
                    <PiCopy size={20} />
                    <p className="text-inter-16-400">{t('global.copy')}</p>
                </div>
            </div>
            {copy && <div className="another-kebab__copy">
                <p className="text-inter-16-400">{t('global.copied-message')}</p>
            </div>}
        </KebabWrapper>
    )
}
