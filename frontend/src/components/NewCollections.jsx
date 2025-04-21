import useGlobalContext from '..//hooks/useGlobalContext';
import ProductCard from './ProductCard';

const NewCollections = () => {
  const { products } = useGlobalContext();
  const productsCopy = [...products];
  const newCollections = productsCopy.length > 0 && productsCopy.splice(0, 4);

  return (
    <div
      className="flex flex-col items-center w-full gap-3 mt-10 "
      id="new-collections"
    >
      <h3 className="font-mono text-2xl font-bold ">New Collections</h3>
      <hr className="h-[2px] w-1/2 bg-amber-600 mb-10 " />
      <div className="flex flex-wrap items-center justify-center w-full gap-2">
        {newCollections.length > 0 &&
          newCollections.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
      </div>
    </div>
  );
};
export default NewCollections;
