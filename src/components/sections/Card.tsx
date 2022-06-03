import { ICard } from '../../ts-types/componentTypes';
import CardStyle from '../../assets/styles/CardStyle.styled';

const Card: React.FC<ICard> = ({ total, policy, claim }) => (
  <CardStyle>
    <h1>
      {total}
      <sup>$</sup>
    </h1>
    <p>Total Value of Disbursement</p>
    <div className="stat">
      <div className="policy-bar">
        <div className="description">
          <span>Policy</span>
          <span>
            {policy}
            <sup>$</sup>
          </span>
        </div>
        <progress value={policy} max={total} />
      </div>
      <div className="claim-bar">
        <div className="description">
          <span>Claim</span>
          <span>
            {claim}
            <sup>$</sup>
          </span>
        </div>
        <progress value={claim} max={total} />
      </div>
    </div>
  </CardStyle>
);

export default Card;
