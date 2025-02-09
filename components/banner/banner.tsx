import ContentLayout from '@components/layout/contentLayout';
import { INPUT_PARAMS_TYPE } from '@constants/types/event.constants';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface IBanner {
  banner: string;
  onButtonClick: () => void;
}

const Banner: React.FC<IBanner> = ({ banner, onButtonClick }) => {
  // next
  const { push } = useRouter();

  // state
  const [query, setQuery] = useState<string>('');

  const searchQueryHandler = (event: INPUT_PARAMS_TYPE) => {
    if (event.key === 'Enter') {
      push(`/search/${query}`);
    }
  };

  return (
    <Wrap>
      <ContentLayout>
        <ContentWrap>
          <HighlightText>우리 아이의 꿈이 자라나는 곳</HighlightText>
          <MainTitle>밤비니</MainTitle>
          <SubTitle>언어인지발달상담센터</SubTitle>
          <ButtonWrap>
            <Button>센터<br />소개</Button>
            <Button>선생님<br />소개</Button>
            <Button onClick={onButtonClick}>프로그램<br />안내</Button>
            <Button>평가<br />안내</Button>
            <Button>예약<br />문의</Button>
            <Button>오시는<br />길</Button>
          </ButtonWrap>
        </ContentWrap>
      </ContentLayout>
      {/* <OpacityLayer /> */}
    </Wrap>
  );
};

export default Banner;

const Wrap = styled.div`
  width: 100%;
  height: 900px;
  background-color: white;
  display: flex;
  align-items: center;
  position: relative;

  ${media('md')} {
    height: 700px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const HighlightText = styled.span`
  font-size: 24px;
  color: black;
  background-color: #eec45e;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 56px;
  text-align: center;

  ${media('md')} {
    font-size: 32px;
  }
`;

const MainTitle = styled.h1`
  font-size: 48px;
  color: #e7be48;
  margin-bottom: 24px;

  ${media('md')} {
    font-size: 56px;
  }
`;

const SubTitle = styled.h3`
  font-size: 32px;
  color : black;

  ${media('md')} {
    font-size: 40px;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
  margin-top: 72px;
  justify-items: center;

  ${media('md')} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.div`
  width: 130px;
  height: 110px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  letter-spacing: 1;
  line-height: 1.3;
  cursor: pointer;

  &:nth-child(1) {
    background-color: #e39799; /* 센터소개 - 빨간색 */
  }
  &:nth-child(2) {
    background-color: #ac9ebf; /* 치료 안내 - 보라색 */
  }
  &:nth-child(3) {
    background-color: #92d1d6; /* 평가 안내 - 청록색 */
  }
  &:nth-child(4) {
    background-color: #ffc27f; /* 선생님 소개 - 핑크색 */
  }
  &:nth-child(5) {
    background-color: #b1d6a8; /* 센터소개 반복 - 회색 */
  }
  &:nth-child(6) {
    background-color: #96a4c7; /* 센터소개 반복 - 회색 */
  }

  ${media('md')} {
    width: 200px;
    height: 110px;
    font-size: 24px;
  }
`;

const OpacityLayer = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(180deg, rgba(4, 21, 45, 0), #04152d 79.17%);
  position: absolute;
  bottom: 0;
  left: 0;
`;
