import { ThemeType } from '../assets/styles/Theme.styled';

export interface IStyle {
  theme: ThemeType;
}

export interface GlobalStyleProps extends IStyle {}

export interface INavbarStyle extends IStyle {
  toggleIcon: boolean;
}

export interface IMainSectionStyle extends IStyle {}

export interface ITopHeaderStyle extends IStyle {}
