import React from "react";
import { useTranslation } from 'react-i18next';


export default function NewMessages({ newRef }) {
    const { t } = useTranslation();

    return (
        <div ref={newRef} className="window-mes__new-mess">
            <span className="text-inter-16-400">{t("global.new-messages")}</span>
        </div>
    )
}