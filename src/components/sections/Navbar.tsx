import { useState, useCallback, useRef, useContext } from 'react';
import { NavbarStyle } from '../../assets/styles/NavbarStyle.styled';
import { INavbar } from '../../ts-types/componentTypes';
import Logo from '../../assets/images/icons/Logo';
import navList from '../../assets/utils/navList';
import UserAvi from './UserAvi';
import { Context } from '../../assets/utils/Context';

const Navbar: React.FC<INavbar> = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { stateToTriggerRerender } = useContext(Context);

  const section = useRef<HTMLElement>(null);
  const ul = useRef<HTMLUListElement>(null);
  let element = useRef<any>(null);

  const activeState = (e: any, i: number) => {
    const btn = ul.current?.children[i].children[0];
    if (!btn) return;
    let el = element.current;
    if (!el) {
      el = btn;
      el?.classList.add('active');
      element.current = el;
      return;
    }
    el.classList.remove('active');
    btn.classList.add('active');
    element.current = ul.current?.children[i].children[0];
  };

  const toggleNav = useCallback(() => {
    if (window.innerWidth > 768) return;

    setToggleIcon((toggle) => !toggle);

    const el = section.current!;
    let li,
      time = 1;
    if (!el) return;
    let lists: Element[] | HTMLCollection[] = Array.from(el.children).map(
      (val) => val.children
    );
    const [a] = lists;
    lists = [...Array.from(a)];

    if (toggleIcon) {
      for (li of lists as unknown as HTMLCollectionOf<HTMLLIElement>) {
        li.style.animation = `slide-out  .2s ${0.1 * time}s ease-in 1 forwards`;
        time++;
      }
      el.style.animation = `slide-out .2s ease-in 1 .${time}s forwards`;
    } else {
      el.style.animation = 'slide-in .15s ease-in 1 forwards';
      for (li of lists as unknown as HTMLCollectionOf<HTMLLIElement>) {
        li.style.animation = `slide-in 0.2s ${0.08 * time}s ease-in 1 forwards`;
        time++;
      }
    }
  }, [toggleIcon, setToggleIcon]);

  return (
    <NavbarStyle toggleIcon={toggleIcon}>
      <div className="logo">
        <Logo />
      </div>
      <section ref={section} className="list">
        {window.innerWidth > 768 && <UserAvi />}
        <ul ref={ul}>
          {navList.map(({ Block, text }, i) => (
            <li key={text}>
              <button onClick={(e) => activeState(e, i)}>
                <Block />
                <span>{text}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <button className="hamburger" onClick={toggleNav}>
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
      </button>
    </NavbarStyle>
  );
};

export default Navbar;
