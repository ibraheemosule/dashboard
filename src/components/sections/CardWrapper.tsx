import CardWrapperStyle from '../../assets/styles/CardWrapperStyle.styled';
import { cardDetails } from '../../assets/utils';
import Card from './Card';

const CardWrapper: React.FC = () => (
  <CardWrapperStyle>
    {cardDetails.map(({ total, policy, claim }, i) => (
      <Card key={i} total={total} policy={policy} claim={claim} />
    ))}
  </CardWrapperStyle>
);

export default CardWrapper;
