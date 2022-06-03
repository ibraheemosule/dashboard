import HeroStyle from '../../assets/styles/HeroStyle.styled';
import heroImg from '../../assets/images/agent.png';

const HeroSection: React.FC = () => {
  return (
    <HeroStyle>
      <img src={heroImg} alt="hero section" />
      <div className="hero__text-wrapper">
        <h3>20% Safe On Your First Account</h3>
        <div>
          <span>NEWBIE20</span>
          <span>Copy Code</span>
        </div>
      </div>
    </HeroStyle>
  );
};

export default HeroSection;
