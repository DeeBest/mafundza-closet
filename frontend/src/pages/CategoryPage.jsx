import { Link, useParams } from 'react-router-dom';
import useGlobalContext from '../hooks/useGlobalContext';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useGlobalContext();
  const [categoryProducts, setCategoryProducts] = useState([]);

  const filteredProducts = (itemCategory) => {
    const foundProducts = products.filter(
      (product) => product.productCategory === itemCategory
    );

    setCategoryProducts(foundProducts);
  };

  useEffect(() => {
    products.length > 0 && filteredProducts(category);
  }, [category]);

  return (
    <section className="flex flex-col items-center justify-center w-full gap-5 ">
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 rounded-md sm:flex-row bg-gradient-to-r from-pink-200 to-white mb-[60px] sm:justify-between ">
        <div className="flex flex-col items-center justify-between gap-4 ">
          <h1 className="font-mono text-4xl font-semibold text-center text-amber-600 ">
            Latest In {category}
          </h1>
          <p className="mb-auto font-serif text-lg font-bold text-gray-400 ">
            Get The Best Value For your Money in {category} at Mafundza Closet.{' '}
          </p>
          <Link>
            <button className="px-2 py-1 font-bold text-white rounded-lg bg-amber-600 ">
              Explore More
            </button>
          </Link>
        </div>
        {categoryProducts.length > 0 && (
          <img
            src={categoryProducts[1].productImage}
            alt={categoryProducts[1].productTitle}
            className="sm:max-w-[200px] rounded-md w-full "
          />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-4 ">
        {categoryProducts.length > 0 &&
          categoryProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};
export default CategoryPage;
