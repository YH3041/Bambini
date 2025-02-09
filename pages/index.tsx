import Banner from '@components/banner/banner';
import Progream from '@components/contents/progream';
import SEO from '@components/seo/seo';
import Trending from '@components/trending/trending';
import { IMG_LOGO } from '@constants/images/images.constants';
import styled from '@emotion/styled';
import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useEffect, useRef } from 'react';

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
  const progreamRef = useRef<HTMLDivElement | null>(null);  // Progream의 위치 참조
  
  // 버튼 클릭 시 스크롤 이동 함수
  const handleScrollToProgream = () => {
    progreamRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Wrap>
      <SEO title="언어인지발달상담센터" content="발달재활서비스/언어발달지원/우리아이심리지원서비스/교육청 방과후&치료지원/바우처 서비스 제공 기관" url="https://movdak.kr/" ogImage={IMG_LOGO} />
      <Banner banner={banner} onButtonClick={handleScrollToProgream}/>
      <Progream ref={progreamRef}/>
      <Trending />
      <div style={{ height: 1000 }}></div>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.main`

`;
