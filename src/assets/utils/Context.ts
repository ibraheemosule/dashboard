import { createContext, Dispatch, SetStateAction } from 'react';

interface IContext {
  stateToTriggerRerender: boolean;
}

export const Context = createContext<IContext>(null!);
