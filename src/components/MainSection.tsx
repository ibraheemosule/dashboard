import { lazy, useContext } from 'react';
import MainSectionStyle from '../assets/styles/MainSectionStyle.styled';
import CardWrapper from './sections/CardWrapper';
import HeroSection from './sections/HeroSection';
import TopHeader from './sections/TopHeader';
import { Context } from '../assets/utils/Context';
import UserAvi from './sections/UserAvi';

const MainSection: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { stateToTriggerRerender } = useContext(Context);
  return (
    <>
      <TopHeader />
      <MainSectionStyle>
        {window.innerWidth < 768 && <UserAvi />}
        <HeroSection />
        <CardWrapper />
      </MainSectionStyle>
    </>
  );
};
export default MainSection;
