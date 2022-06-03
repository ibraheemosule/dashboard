import MainSectionStyle from '../assets/styles/MainSectionStyle.styled';
import TopHeader from './sections/TopHeader';

const MainSection: React.FC = () => {
  return (
    <MainSectionStyle>
      <TopHeader />
    </MainSectionStyle>
  );
};

export default MainSection;
