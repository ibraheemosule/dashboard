import MainSectionStyle from '../assets/styles/MainSectionStyle.styled';
import CardWrapper from './sections/CardWrapper';
import HeroSection from './sections/HeroSection';
import TopHeader from './sections/TopHeader';

const MainSection: React.FC = () => {
  return (
    <>
      <TopHeader />
      <MainSectionStyle>
        <HeroSection />
        <CardWrapper />
      </MainSectionStyle>
    </>
  );
};

export default MainSection;
