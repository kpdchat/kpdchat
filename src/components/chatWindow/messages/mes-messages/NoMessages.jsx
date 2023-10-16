import React from "react";
import { useTranslation } from "react-i18next";

export default function NoMessages() {
    const { t } = useTranslation()
    return (
        <div className="messages__no-messages no-select">
            <div className="text-inter-16-400">
                {t('global.no-messages')}
            </div>
        </div>
    )
}