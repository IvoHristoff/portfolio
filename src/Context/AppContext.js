import { createContext } from 'react';

const AppContext = createContext({
  data: null,
  setContext() {}
});

export default AppContext;
