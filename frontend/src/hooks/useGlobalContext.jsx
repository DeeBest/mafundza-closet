import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export default useGlobalContext;
