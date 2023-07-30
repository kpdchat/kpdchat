import React from 'react';
import {InfoTitle} from "./InfoTitle";
import {InfoImage} from "./InfoImage";
import {InfoFeature} from "./InfoFeature";

export function Info() {
  return (
      <div className='info'>
        <div className='info_block'>
            <InfoTitle/>
            <InfoImage/>
            <InfoFeature/>
        </div>
      </div>
  );
}