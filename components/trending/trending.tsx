import Style from './trending.module.scss';
import useFetch from 'hooks/useFetch';
import Image from 'next/image';
import { useState } from 'react';
import { IMG_MAP } from '@constants/images/images.constants';

const Trending = () => {
  const [type, setType] = useState<string>('day');
  const { data, loading } = useFetch(`/trending/all/${type}?language=ko`);

  const tabHandler = (tab: string, idx: number) => {
    setType(tab.toLocaleLowerCase());
  };

  return (
<section className={Style.wrap}>
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
};

export default Trending;
