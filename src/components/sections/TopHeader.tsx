import { useRef } from 'react';
import TopHeaderStyle from '../../assets/styles/TopHeaderStyle.styled';

const headerList = ['Overview', 'Policy', 'Reports'];

const TopHeader: React.FC = () => {
  let element = useRef<HTMLLIElement | null>(null);

  const activeState = (e: any) => {
    let el = element.current;
    if (!el) {
      el = e.target;
      el?.classList.add('active');
      element.current = e.target;
      return;
    }
    el.classList.remove('active');
    e.target.classList.add('active');
    element.current = e.target;
  };

  return (
    <TopHeaderStyle>
      <ul>
        {headerList.map((item) => (
          <li key={item}>
            <button onClick={(e) => activeState(e)}>
              {item} <hr />
            </button>
          </li>
        ))}
      </ul>
    </TopHeaderStyle>
  );
};

export default TopHeader;
