const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-[300px] h-[400px] flex flex-col gap-3 my-5 text-sm ">
      <div className="w-full overflow-hidden h-[70%] rounded-t-md ">
        <img
          src={product.productImage}
          alt={product.productTitle}
          className="object-cover w-full h-full "
        />
      </div>
      <div className="flex-col w-full p-1 ">
        <div className="flex items-center justify-between w-full gap-2">
          <h3 className="font-bold ">{product.productTitle} </h3>
          <span className="text-amber-600 ">R{product.productPrice}</span>
        </div>
        <p className="text-gray-400 text-end ">{product.productCategory}</p>
        <p className="mt-5 text-xs italic text-center text-gray-400 ">
          {product.productDesc}
        </p>
      </div>
    </div>
  );
};
export default ProductCard;
