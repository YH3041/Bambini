import ContentLayout from '@components/layout/contentLayout';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IMG_PHONE, IMG_RESERVATION } from '@constants/images/images.constants';
import { forwardRef } from 'react';

interface IVoucher {

}

const Voucher = forwardRef<HTMLDivElement, IVoucher>((props, ref) => {
  // next
  const { push } = useRouter();

  return (
    <Wrap ref={ref}>
      <ContentLayout>
        <ContentWrap>
          <HighlightText>이용 가능한 바우처 서비스</HighlightText>
          <ProgramWrap>
            <ItemWrap>
              <SubTitle>발달재활<br />서비스</SubTitle>
            </ItemWrap>
            <ItemWrap>
              <SubTitle>우리아이<br />심리지원<br/>서비스</SubTitle>
            </ItemWrap>
            <ItemWrap>
              <SubTitle><span className="small">경기도교육청</span><span>꿈e든</span><span>카드</span></SubTitle>
            </ItemWrap>
            <ItemWrap>
              <SubTitle><span className="small">경기도교육청</span><span className='small'>난독바우처</span><span>그린나래</span><span>카드</span></SubTitle>
            </ItemWrap>
          </ProgramWrap>
        </ContentWrap>
      </ContentLayout>
    </Wrap>
  );
});

export default Voucher;

const Wrap = styled.div`
  width: 100%;
  height: 700px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);   /* ✅ 한 줄에 2개 */
  gap: 50px 100px;
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

const SubTitle = styled.a`
  font-size: 34px;
  font-weight: bold;
  color: white;
  background-color: #6a7b95;
  padding: 10px 24px;
  border-radius: 20px;
  line-height: 1.4;
  min-width: 240px;
  min-height: 190px;
    text-decoration: none;
  white-space: nowrap;

  /* 👇 가운데 정렬 핵심 */
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 

  .small {
    font-size: 22px;      /* ✅ 작은 글씨 */
    font-weight: 500;
  }
`;
