import useGlobalContext from '../hooks/useGlobalContext';

const ProductsList = () => {
  const { products } = useGlobalContext();

  return (
    <div className="w-full flex-1 flex flex-col gap-10 ">
      <div className="w-full flex items-center gap-2 justify-between ">
        <h1 className="font-bold text-xl ">All Products</h1>
        {products && (
          <p className="text-xs text-gray-400 ">
            Number Of Products:{' '}
            <span className="text-pink-600 font-bold ">{products.length}</span>
          </p>
        )}
      </div>
      <table className="w-full text-xs ">
        <thead>
          <tr className="flex items-center justify-between w-full gap-2  mb-2 text-sm font-bold font-serif ">
            <td className="flex items-center flex-1 justify-start ">Image</td>
            <td className="flex items-center flex-1 justify-start ">Name</td>
            <td className="flex items-center flex-1 justify-start ">Price</td>
            <td className="flex items-center flex-1 justify-start ">
              Category
            </td>
            <td className="flex items-center flex-1 justify-start ">
              Description
            </td>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col gap-3 ">
          {products.length > 0 &&
            products.map((product) => (
              <tr
                key={product._id}
                className="flex gap-2 items-center justify-between w-full "
              >
                <td className="overflow-hidden w-[100px] rounded-full h-[100px] ">
                  {
                    <img
                      src={product.productImage}
                      alt={product.productTitle}
                      className="w-full object-center "
                    />
                  }
                </td>
                <td className="flex items-center flex-1 justify-start ">
                  {product.productTitle}
                </td>
                <td className="flex items-center flex-1 justify-start ">
                  {product.productPrice}
                </td>
                <td className="flex items-center flex-1 justify-start ">
                  {product.productCategory}
                </td>
                <td className="flex items-center flex-1 justify-start ">
                  {product.productDesc}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsList;
