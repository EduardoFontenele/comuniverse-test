/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useReducer, useMemo } from 'react';
import Prop from 'prop-types';
import userData from './data';

export const defaultReducer = (state, action) => {
  switch (action.type) {
    case 'PERCENT_PLUS_ONE': {
      if (state.percent < 100) {
        return ({ ...state, percent: state.percent + 1 });
      }

      if (state.percent === 100) {
        return { ...state, percent: 100 };
      }
      break;
    }

    default: {
      console.log('Nothing');
    }
  }
  return { ...state };
};

export const DefaultContext = createContext();

export default function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(defaultReducer, userData);

  return (
    <DefaultContext.Provider value={{ state, dispatch }}>
      {children}
    </DefaultContext.Provider>
  );
}

GlobalContext.propTypes = {
  children: Prop.node.isRequired,
};
