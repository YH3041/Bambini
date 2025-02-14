import Style from './map.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { IMG_MAP } from '@constants/images/images.constants';
import { forwardRef } from 'react';

interface IMap {

}

const Map = forwardRef<HTMLDivElement, IMap>((props, ref) => {

  return (
  <section className={Style.wrap} ref={ref}>
    <div className={Style.contentWrap}>
      <h2 className={Style.title}>오시는 길</h2>
      <a href="https://map.naver.com/p/entry/place/1368102473?c=15.77,0,0,0,dh" target="_blank" rel="noopener noreferrer">
        <div className={Style.imgContainer}>
          <Image className={Style.img} src={IMG_MAP} fill alt="지도" />
        </div>
      </a>
    </div>
  </section>
  );
});

export default Map;
