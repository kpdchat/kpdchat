import React from 'react';
import {InfoTitle} from "./InfoTitle";
import {InfoImage} from "./InfoImage";
import {InfoFeature} from "./InfoFeature";

export function Info() {
    return (
        <div className='info'>
            <div className='info__block'>
                <InfoTitle />
                <InfoImage />
                <InfoFeature />
            </div>
        </div>
    );
}
