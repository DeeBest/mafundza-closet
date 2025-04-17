import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        'https://mafundzaclosetbackend.onrender.com/api/products/getAllProducts'
      );
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
      {isLoading ? <h1>Loading...</h1> : children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
