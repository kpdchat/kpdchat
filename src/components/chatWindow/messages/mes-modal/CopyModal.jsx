import React from "react";
import { useTranslation } from 'react-i18next';


export default function CopyModal() {
    const { t } = useTranslation();

    return (
        <div className="modal-container modal-copy">
            <div className="modal-copy__content">
            <p className="text-inter-16-600">{ t('global.copied-message') }</p>
            </div>
        </div>
    )
}