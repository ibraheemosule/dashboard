import MainSectionStyle from '../assets/styles/MainSectionStyle.styled';
import HeroSection from './sections/HeroSection';
import TopHeader from './sections/TopHeader';

const MainSection: React.FC = () => {
  return (
    <>
      <TopHeader />
      <MainSectionStyle>
        <HeroSection />
      </MainSectionStyle>
    </>
  );
};

export default MainSection;
