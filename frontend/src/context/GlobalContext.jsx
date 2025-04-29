import { createContext, useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import myAxios from '../api/axios';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await myAxios.get(`/products/getAllProducts`);

      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const globalContextValue = { products, setProducts, fetchProducts };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {isLoading ? <LoadingSpinner /> : children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
