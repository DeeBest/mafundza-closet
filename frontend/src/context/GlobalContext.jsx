import { createContext, useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const productionBackend = 'https://mafundzaclosetbackend.onrender.com/api';

const devBackend = 'http://localhost:5000/api';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      // const res = await fetch(`${productionBackend}/products/getAllProducts`);
      const res = await fetch(`${devBackend}/products/getAllProducts`);

      const data = await res.json();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const globalContextValue = { products, setProducts };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {isLoading ? <LoadingSpinner /> : children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
