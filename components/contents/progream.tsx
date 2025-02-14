import ContentLayout from '@components/layout/contentLayout';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IMG_LANGUAGE, IMG_COGNITIVE, IMG_ART, IMG_GROUP } from '@constants/images/images.constants';
import { forwardRef } from 'react';

interface IProgream {

}

const Progream = forwardRef<HTMLDivElement, IProgream>((props, ref) => {
  // next
  const { push } = useRouter();

  return (
    <Wrap ref={ref}>
      <ContentLayout>
        <ContentWrap>
          <HighlightText>프로그램 안내</HighlightText>
          <ProgramWrap>
            <ItemWrap>
              <ImageWrap>
                  <Image src={IMG_LANGUAGE} fill alt="언어" />
              </ImageWrap>
              <SubTitle>언어</SubTitle>
            </ItemWrap>
            <ItemWrap>
              <ImageWrap>
                  <Image src={IMG_COGNITIVE} fill alt="인지" />
              </ImageWrap>
              <SubTitle>인지</SubTitle>
            </ItemWrap>
            <ItemWrap>
              <ImageWrap>
                  <Image src={IMG_ART} fill alt="미술" />
              </ImageWrap>
              <SubTitle>미술</SubTitle>
            </ItemWrap>
            <ItemWrap>
              <ImageWrap>
                  <Image src={IMG_GROUP} fill alt="그룹" />
              </ImageWrap>
              <SubTitle>맞춤형 <br />짝/그룹 수업</SubTitle>
            </ItemWrap>
          </ProgramWrap>
        </ContentWrap>
      </ContentLayout>
    </Wrap>
  );
});

export default Progream;

const Wrap = styled.div`
  width: 100%;
  height: 650px;
  background-color: #6a7b95;
  display: flex;
  align-items: center;
  position: relative;

  ${media('md')} {
    height: 800px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin-top: 24px;
  margin-bottom: 24px;
  text-align: center;

  ${media('md')} {
    font-size: 32px;
    margin-top: 42px;
    margin-bottom: 40px;
  }
`;

const ProgramWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px 70px;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  
  ${media('md')} {
    grid-template-columns: repeat(3, 1fr);

      & > :nth-child(4) {
      grid-column: span 3;
      justify-self: center;
    }
  }
`;

const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const ImageWrap = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: relative;

    ${media('md')} {
        width: 130px;
        height: 130px;
    }
`;

const SubTitle = styled.h3`
    font-size: 28px;
    font-weight: bold;
    color: white;
`;