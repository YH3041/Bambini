import Header from '@components/header/header';
import Banner from '@components/banner/banner';
import TecherInfo from '@components/contents/teacherInfo';
import Progream from '@components/contents/progream';
import SEO from '@components/seo/seo';
import Map from '@components/trending/map';
import { IMG_LOGO } from '@constants/images/images.constants';
import styled from '@emotion/styled';
import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useRef, useState, useEffect } from 'react';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const headers = {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
  };
  const { data: configRes } = await axios.get('https://api.themoviedb.org/3/configuration', { headers });
  const { data: movieRes } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=ko', { headers });

  const banner = `${configRes.images.secure_base_url}original/${movieRes.results?.[Math.floor(Math.random() * 20)].backdrop_path}`;

  return {
    props: {
      banner
    }
  };
};

interface IHome {
  banner: string;
}

const Home: NextPage<IHome> = ({ banner }) => {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const sectionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  
    // 스크롤 위치 감지
    useEffect(() => {
      const handleScroll = () => {
        const isMobile = window.innerWidth <= 768;  // 모바일 기준 (768px 이하)
        const scrollPosition = window.scrollY;
  
        if (isMobile) {
          // 모바일 모드 스크롤 기준 (예: 400px)
          if (scrollPosition > 830) {
            setShowHeader(true);
          } else {
            setShowHeader(false);
          }
        } else {
          // 데스크톱 모드 스크롤 기준 (예: 630px)
          if (scrollPosition > 630) {
            setShowHeader(true);
          } else {
            setShowHeader(false);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  
    }, []);

  const handleScrollToSection = (idx: number) => {
    const headerOffset = 60;
    const element = sectionRefs[idx]?.current;
  
    if (element && idx == 1 || element && idx == 5) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    else
    {
      sectionRefs[idx]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Wrap>
      {showHeader && <Header onButtonClick={handleScrollToSection}/>}
      <SEO title="언어인지발달상담센터" content="발달재활서비스/언어발달지원/우리아이심리지원서비스/교육청 방과후&치료지원/바우처 서비스 제공 기관" url="https://movdak.kr/" ogImage={IMG_LOGO} />
      <Banner ref={sectionRefs[0]} banner={banner} onButtonClick={handleScrollToSection}/>
      <TecherInfo ref={sectionRefs[1]} />
      <Progream ref={sectionRefs[2]}/>
      <Map ref={sectionRefs[5]} />
      <div style={{ height: 1000 }}></div>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.main`
  width: 100vw;                // ✅ 화면 가로 전체 사용
`;
