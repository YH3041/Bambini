import Style from './map.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { IMG_MAP } from '@constants/images/images.constants';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { media } from '@styles/media';

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
      <SubTitleWrap>
        <h3 className="line1">☑️ 주소 : 경기 화성시 동탄대로 537 라스플로레스 B동 4층 422호<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(CGV 동탄역점 건물, 중앙 에스컬레이터 앞)</h3>
        <h3>☑️ 전화/문자 : 031-374-5515 / 010-3973-5515</h3>
        <h3>☑️ 운영 요일 : 월요일 - 토요일</h3>
        <h3>☑️ 운영 시간 : 11:00 - 20:00</h3>
        <h3>☑️ 빠른 통화 연결 시간 : 평일 15:00 - 18:00</h3>
        <h3>☑️ 주차 : 건물 내 지하 1층, 지하 2층 이용 가능</h3>
    </SubTitleWrap>
    </div>
  </section>
  );
});

export default Map;



const SubTitleWrap = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: black;
    border-radius: 16px;
    padding: 10px 0px;
    line-height: 3;
    margin: 0 auto;
    font-size: 9px;

    .line1 {
      line-height: 1.5;
    }

    ${media('md')} {
      gap: 40px;
       font-size: 16px;
       padding: 20px 10px;
       margin: 40px auto;
    }
`;