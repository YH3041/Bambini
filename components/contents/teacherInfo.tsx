import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IMG_TECHERS } from '@constants/images/images.constants';
import { forwardRef } from 'react';

interface ITecherInfo {

}

const TecherInfo = forwardRef<HTMLDivElement, ITecherInfo>((props, ref) => {
  // next
  const { push } = useRouter();

  return (
    <Wrap ref={ref}>
        <ContentWrap>
          <HighlightText>선생님 소개</HighlightText>
          <ProgramWrap>
            <ItemWrap>
              <ImageWrap>
                  <Image src={IMG_TECHERS} fill alt="언어" />
              </ImageWrap>
              <SubTitle>전문성을 갖춘 7인 전문가 팀</SubTitle>
            </ItemWrap>
          </ProgramWrap>
        </ContentWrap>
        <IntoduceWrap>
          <InfoWrap>
              {/* <ImageWrap>
                  <Image src={IMG_LANGUAGE} fill alt="언어" />
              </ImageWrap> */}
            <StyleBox />
            <NameWithCareerWrap>
              <Name>센터장<br />언어치료사 이루다</Name>
              <br />
              <br />
              <Career>보건복지부 1급 언어재활사</Career>
              <br />
              <Career>나사렛대학교 일반대학원 언어치료학 박사</Career>
              <Career>나사렛대학교 일반대학원 언어치료학 석사</Career>
              <Career>나사렛대학교 언어치료학 학사</Career>
              <br />
              <Career>전) 광명 G그린발달센터</Career>
              <Career>전) 수원 우리동네심리발달상담센터</Career>
              <Career>전) H사 마비말장애 진단 치료 어플 개발 연구 자문</Career>
              <Career>전) 충정북도교육청 아이성장골든타임 사업 컨설턴트</Career>
              <br />
              <Career>언어재활사를 위한 말소리 전사와 오류패턴 분석(공저, 학지사,2025)</Career>
            </NameWithCareerWrap>
          </InfoWrap>
          <InfoWrap>
            {/* <ImageWrap>
              <Image src={IMG_LANGUAGE} fill alt="언어" />
            </ImageWrap> */}
            <StyleBox />
            <NameWithCareerWrap>
              <Name>센터장<br />인지치료사 최혜욱</Name>
              <br />
              <br />
              <Career>교육인적자원부 특수학교 2급 정교사</Career>
              <Career>대한학습치료사협회 1급 인지학습치료사</Career>
              <br />
              <Career>루터대학교 특수대학원 언어치료학 석사</Career>
              <Career>대구대학교 재활심리학 학사(초등특수교육 부전공)</Career>
              <br />
              <Career>전) 강북장애인종합복지관 팀장</Career>
              <Career>전) 구리시장애인종합복지관</Career>
              <Career>전) 용인시기흥장애인복지관</Career>
            </NameWithCareerWrap>
          </InfoWrap>
          <InfoWrap>
            <StyleBox />
            <NameWithCareerWrap>
              <Name>인지치료사 강민서</Name>
              <br />
              <Career>보건복지부 작업치료사 면허</Career>
              <Career>대한학습치료사협회 인지학습상담전문가 2급</Career>
              <Career>한국 PnP 전문가협회 아동자극수용발달전문가 3급</Career>
              <br />
              <Career>가천대학교 치료특수대학원 심리인지치료학전공 석사</Career>
              <Career>대구사이버대학교 놀이치료학과 학사</Career>
              <Career>동남보건대학교 작업치료전공 보건전문학사</Career>
              <br />
              <Career>전) 용인시기흥장애인복지관</Career>
              <Career>전) 수원 우리동네심리발달상담센터</Career>
              <Career>전) 서울 굿앤굿언어감각발달센터</Career>
            </NameWithCareerWrap>
          </InfoWrap>
          <InfoWrap>
            <StyleBox />
            <NameWithCareerWrap>
              <Name>언어치료사 홍진아</Name>
              <br />
              <br />
              <Career>보건복지부 2급 언어재활사</Career>
              <br />
              <Career>나사렛대학교 일반대학원 언어치료학 석사</Career>
              <br />
              <Career>전) 서울 가온누리아동심리상담센터</Career>
            </NameWithCareerWrap>
          </InfoWrap>
          <InfoWrap>
            <StyleBox />
            <NameWithCareerWrap>
              <Name>언어치료사 이지은</Name>
              <br />
              <br />
              <Career>보건복지부 2급 언어재활사</Career>
              <br />
              <Career>가천대학교 특수치료대학원 언어치료학전공 석사</Career>
              <br />
              <Career>전) 화성 여름발달센터</Career>
            </NameWithCareerWrap>
          </InfoWrap>
          <InfoWrap>
            <StyleBox />
            <NameWithCareerWrap>
              <Name>미술교사 민선미</Name>
              <br />
              <br />
              <Career>코리아홀리스틱상담교육협회 미술심리상담사 2급</Career>
              <br />
              <Career>성신여자대학교 일반대학원 동양학과 중퇴</Career>
              <Career>창원대학교 미술학과 한국화전공</Career>
              <br />
              <Career>전) 대치 입시미술 전문 개인지도 강사</Career>
              <Career>전) 창원 그림마당 원장</Career>
            </NameWithCareerWrap>
          </InfoWrap>
          <InfoWrap>
            <StyleBox />
            <NameWithCareerWrap>
              <Name>미술교사 이보민</Name>
              <br />
              <br />
              <Career>한국직업평가진흥협회 미술심리상담지도사 1급</Career>
              <br />
              <Career>조선대학교 디자인학과 학사</Career>
              <br />
              <Career>전) 입시미술학원 강사</Career>
              <Career>전) 프리랜서 일러스트 작가</Career>
            </NameWithCareerWrap>
          </InfoWrap>
        </IntoduceWrap>
    </Wrap>
  );
});

export default TecherInfo;

const Wrap = styled.div`
  width: 100vw;                // ✅ 화면 가로 전체 사용
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media('md')} {

  }
`;

const ContentWrap = styled.div`
  width: 100vw;                // ✅ 화면 가로 전체 사용
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-align: center;
  margin: 0 auto;
  background-color: #6a7b95;
`;

const IntoduceWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 90px auto;
  background-color: white;
  color: black;
  /* max-width: 700px; */
  line-height: 1.25;
  gap: 100px 0px;
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: stretch;
  width: 100%;
  max-width: 800px;        // ✅ 중앙 정렬 기준 폭 설정
  align-self: center;      // ✅ IntoduceWrap의 중앙 기준으로 가운데 배치

  @media (max-width: 767px) {
    padding-left: 20px;
  }
`;

const StyleBox = styled.div`
  width: 10px;
  background-color: #eec45e;
  border-radius: 10px;
`;

const NameWithCareerWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Name = styled.h3`
  ${media('md')} {
    font-size: 28px;
  }
`;

const Career = styled.h5`
    ${media('md')} {
      font-size: 20px;
  }
`

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
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
`;

const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
`;

const ImageWrap = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: relative;
    margin: auto;

    ${media('md')} {
        width: 130px;
        height: 130px;
    }
`;

const SubTitle = styled.h3`
    font-size: 26px;
    font-weight: bold;
    color: white;
      white-space: nowrap;       // ✅ 줄바꿈 없이 한 줄 유지
`;