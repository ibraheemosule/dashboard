import LayoutStyle from '../assets/styles/LayoutStyle.styled';
import { ILayout } from '../ts-types/componentTypes';
import Navbar from './sections/Navbar';

const Layout: React.FC<ILayout> = ({ children }) => (
  <LayoutStyle>
    <Navbar />
    {children}
  </LayoutStyle>
);

export default Layout;
