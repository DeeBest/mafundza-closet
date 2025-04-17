import { useEffect, useState } from 'react';
import useGlobalContext from '../hooks/useGlobalContext';
import ProductCard from './ProductCard';

const Popular = () => {
  const { products } = useGlobalContext();

  const filterFunc = (category) => {
    const filteredProducts =
      products.length > 0 &&
      products.filter((product) => product.productCategory === category);

    return filteredProducts;
  };

  const shoes = filterFunc('Shoes');
  const weaves = filterFunc('Weaves');
  const suits = filterFunc('Suits');

  const [imgIndex, setImgIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setImgIndex((imgIndex + 1) % suits.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imgIndex]);

  return (
    <div className="flex flex-col items-center w-full gap-3 mt-10 ">
      <h3 className="font-mono text-2xl font-bold ">Popular Products</h3>
      <hr className="h-[2px] w-1/2 bg-amber-600 mb-10 " />
      <div className="flex flex-col w-full sm:max-w-[700px] sm:max-h-[650px] gap-2">
        <div className="flex gap-2 w-full sm:h-[400px] flex-col-reverse sm:flex-row ">
          <div className="overflow-hidden sm:relative sm:flex-1">
            {suits && suits.length > 0 && (
              <img
                src={suits[imgIndex].productImage}
                alt={suits[imgIndex].productTitle}
                className={`${
                  isAnimating
                    ? 'opacity-0 translate-y-full'
                    : 'opacity-100 translate-y-0'
                } object-cover w-full h-full sm:absolute inset-0 transition-[opacity, transform] ease-in-out duration-500 `}
              />
            )}
          </div>
          <div className="relative sm:flex-1">
            {shoes && shoes.length > 0 && (
              <img
                src={shoes[imgIndex].productImage}
                alt={shoes[imgIndex].productTitle}
                className={`${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                } object-cover w-full h-full transition-[opacity] ease-in-out duration-500 delay-300 `}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:h-[200px] gap-2 overflow-hidden">
          {weaves &&
            weaves.length > 0 &&
            weaves.map((weave) => (
              <ProductCard
                product={weave}
                key={weave._id}
                className="object-cover w-full sm:max-w-[200px]"
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Popular;
