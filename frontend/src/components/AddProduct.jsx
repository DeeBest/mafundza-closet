import { useState } from 'react';

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState('Uncategorized');
  const [productImage, setProductImage] = useState('');
  const [productImagePreview, setProductImagePreview] = useState(null);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      productTitle,
      productPrice,
      productDesc,
      productCategory,
      productImage,
    };
    console.log(newProduct);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    console.log('image upload');
  };

  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center ">
      <h3 className="text-xl font-serif mb-5 ">Add New Product</h3>
      <form className="flex gap-3 items-center justify-between w-full max-w-[400px] ">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setProductImage(e.target.files[0]);
            setProductImagePreview(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <button
          className="bg-amber-600 text-white font-bold rounded-md p-1 hover:opacity-65 duration-300 whitespace-nowrap "
          onClick={handleImageUpload}
        >
          Upload Image
        </button>
      </form>
      {productImagePreview && (
        <img
          src={productImagePreview}
          alt="product image"
          className="w-[150px] "
        />
      )}
      <form className="w-full flex flex-col gap-2 max-w-[400px] ">
        <input
          type="text"
          placeholder="Name"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          className="w-full p-1 border border-amber-600 rounded-md text-sm "
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
          className="w-full p-1 border border-amber-600 rounded-md text-sm "
        />
        <textarea
          placeholder="Description"
          value={productDesc}
          onChange={(e) => setProductDesc(e.target.value)}
          className="w-full p-1 border border-amber-600 rounded-md text-sm "
        />
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="w-full p-1 border border-amber-600 rounded-md text-sm "
        >
          <option value="Uncategorized">Select Category</option>
          <option value="Shoes">Shoes</option>
          <option value="Suits">Suits</option>
          <option value="Weaves">Weaves</option>
          <option value="Combos">Combos</option>
          <option value="Iphones">Iphones</option>
        </select>
        <button
          onClick={handleAddProduct}
          className="bg-amber-600 text-white font-bold rounded-md self-center p-1 hover:opacity-65 whitespace-nowrap duration-300 "
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
