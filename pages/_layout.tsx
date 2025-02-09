import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { useState, useEffect } from 'react';

const Layout = ({ children }: any) => {

  const [showHeader, setShowHeader] = useState<boolean>(false);

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



  return (
    <div>
      {showHeader && <Header />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
