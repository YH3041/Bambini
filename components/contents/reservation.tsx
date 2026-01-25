import ContentLayout from '@components/layout/contentLayout';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IMG_PHONE, IMG_RESERVATION } from '@constants/images/images.constants';
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
          <HighlightText>초기 상담 / 예약 문의</HighlightText>
          <ProgramWrap>
            <ItemWrap>
              <ImageWrap>
                  <Image src={IMG_PHONE} fill alt="초기 상담" />
              </ImageWrap>
              <SubTitle href='https://form.naver.com/response/WwlwpVUZE8v6377fS1Qikg' target="_blank" rel="noopener noreferrer">초기 상담<br />온라인 예약<br />바로가기</SubTitle>
            </ItemWrap>
            <ItemWrap>
              <ImageWrap>
                  <Image src={IMG_RESERVATION} fill alt="전화" />
              </ImageWrap>
              <SubTitle href="tel:01039735515">전화<br />상담/문의</SubTitle>
            </ItemWrap>
          </ProgramWrap>
        <SubTitleWrap>
            <h3>☑️ 초기 상담은 무료입니다.</h3>
            <h3>☑️ 예약 없이 방문하시는 경우 상담이 어려울 수 있습니다.</h3>
            <h3>☑️ 빠른 안내를 원하시는 경우, 13시-18시 사이에 전화주시기 바랍니다.</h3>
            <h3>☎️ 031-374-5515 / 010-3973-5515</h3>
        </SubTitleWrap>
        </ContentWrap>
      </ContentLayout>
    </Wrap>
  );
});

export default Progream;

const Wrap = styled.div`
  width: 100%;
  height: 700px;
  background-color: #6a7b95;
  display: flex;
  align-items: center;
  position: relative;

  ${media('md')} {
    height: 1100px;
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
  display: flex;
  gap: 24px 120px;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  
  ${media('md')} {
    grid-template-columns: repeat(2, 1fr);  // ✅ 4개 한 줄
  }
`;

const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const SubTitle = styled.a`
  font-size: 28px;
  font-weight: bold;
  color: black;
  background-color: #eec45e;
  padding: 10px 24px;
  border-radius: 10px;
  line-height: 1.4;
  min-height: 140px;
    text-decoration: none;
  white-space: nowrap;

  /* 👇 가운데 정렬 핵심 */
  display: flex;
  align-items: center;        /* 세로 가운데 */
  justify-content: center;    /* 가로 가운데 */
  text-align: center;         /* 줄바꿈 시 대비 */
`;

const SubTitleWrap = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: black;
    width: 650px;
    height: 200px;
    border-radius: 16px;
    padding: 20px 10px;
    margin-top: 10px;
    line-height: 2;
`;