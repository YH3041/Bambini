import ContentLayout from '@components/layout/contentLayout';
import { IMG_LOGO } from '@constants/images/images.constants';
import { INPUT_PARAMS_TYPE } from '@constants/types/event.constants';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';

interface IHeader
{
  onButtonClick: (idx: number) => void;
}

const Header : React.FC<IHeader> = ({onButtonClick}) => {
  //? next
  const { push } = useRouter();

  const sectionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  //? state
  const [show, setShow] = useState<string>('top');
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [query, setQuery] = useState<string>();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
    setShowDropdown(true); 
  };

  const searchQueryHandler = (event: INPUT_PARAMS_TYPE) => {
    if (event.key === 'Enter') {
      push(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  return (
    <Wrap className={`${mobileMenu ? 'mobileView' : ''} ${show}`}>
      <ContentLayout>
        <LogoWrap>
        <div className="logo-image">
        <Image src={IMG_LOGO} fill alt="로고" />
        </div>
        <span>
          밤비니언어인지발달상담센터
        </span>
        </LogoWrap>
        <MenuItems>
          <MenuItem onClick={() => onButtonClick(0)}>센터 소개</MenuItem>
          <MenuItem onClick={() => onButtonClick(1)}>선생님 소개</MenuItem>
          <MenuItem onClick={() => onButtonClick(2)}>프로그램 안내</MenuItem>
          <MenuItem onClick={() => onButtonClick(3)}>평가 안내</MenuItem>
          <MenuItem onClick={() => onButtonClick(4)}>예약 문의</MenuItem>
          <MenuItem onClick={() => onButtonClick(5)}>오시는 길</MenuItem>
        </MenuItems>
        
        <MobileMenuItems>
          {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
        </MobileMenuItems>
      </ContentLayout>

      {mobileMenu && showDropdown && (
        <DropdownMenu>
          <DropdownItem onClick={() => onButtonClick(0)}>센터 소개</DropdownItem>
          <DropdownItem onClick={() => onButtonClick(1)}>선생님 소개</DropdownItem>
          <DropdownItem onClick={() => onButtonClick(2)}>프로그램 안내</DropdownItem>
          <DropdownItem onClick={() => onButtonClick(3)}>평가 안내</DropdownItem>
          <DropdownItem onClick={() => onButtonClick(4)}>예약 문의</DropdownItem>
          <DropdownItem onClick={() => onButtonClick(5)}>오시는 길</DropdownItem>
        </DropdownMenu>
      )}
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  position: fixed;
  transform: translateY(0);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  transition: all ease 0.5s;
  z-index: 10;
  &.top {
    background-color: rgba(0, 0, 0, 0.25);
    /* backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px); */
  }
  &.show {
    background-color: var(--black3);
  }
  &.hide {
    transform: translateY(-50px);
  }
`;
const LogoWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center; 
  gap: 10px;
  
  .logo-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: white;
    letter-spacing: 1px;
  }
`;

const MenuItems = styled.ul`
  list-style-type: none;
  align-items: center;
  display: none;

  ${media('md')} {
    display: flex;
  }
`;
const MenuItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 15px;
  color: white;
  font-weight: 500;
  position: relative;
  font-size: 16px;

  &.searchIcon {
    margin-right: 0;
  }
  svg {
    font-size: 18px;
  }
  cursor: pointer;
  &:hover {
    color: var(--pink);
  }
`;

//! 모바일 추가 구현 필요
const MobileMenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${media('md')} {
    display: none;
  }
  svg {
    font-size: 18px;
    color: white;
  }

  &.mobileView {
    background-color: var(--black3);
  }
`;

const SearchBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  position: absolute;
  top: 60px;
  animation: mobileMenu 0.3s ease forwards;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 140px;
  background-color: rgba(0, 0, 0, 0.25); /* 투명 배경 */
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  z-index: 20;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: dropdownSlide 0.3s ease forwards;
`;



const DropdownItem = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--pink);
  }
`;

const dropdownSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

