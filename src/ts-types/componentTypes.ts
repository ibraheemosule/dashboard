import { ReactElement } from 'react';

export interface ILayout {
  children: ReactElement;
}

export interface INavbar {}

export interface ICardWrapper {}

export interface ICard {
  total: number;
  policy: number;
  claim: number;
}
