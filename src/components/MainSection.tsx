import { lazy } from 'react';
import MainSectionStyle from '../assets/styles/MainSectionStyle.styled';
import CardWrapper from './sections/CardWrapper';
import HeroSection from './sections/HeroSection';
import TopHeader from './sections/TopHeader';

const UserAvi = lazy(() => import('./sections/UserAvi'));

const MainSection: React.FC = () => (
  <>
    <TopHeader />
    <MainSectionStyle>
      {window.innerWidth < 768 && <UserAvi />}
      <HeroSection />
      <CardWrapper />
    </MainSectionStyle>
  </>
);

export default MainSection;
