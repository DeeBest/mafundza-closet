import { useState } from 'react';
import myAxios from '../api/axios';
import useGlobalContext from '../hooks/useGlobalContext';

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState('Uncategorized');
  const [productImage, setProductImage] = useState('');
  const [productImagePreview, setProductImagePreview] = useState(null);

  const { fetchProducts } = useGlobalContext();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      productTitle,
      productPrice,
      productDesc,
      productCategory,
      productImage,
    };

    try {
      await myAxios.post('/products/addProduct', newProduct);

      setProductCategory('uncategorized');
      setProductDesc('');
      setProductImage('');
      setProductPrice(0);
      setProductTitle('');

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productImage', productImage);

    try {
      const res = await myAxios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setProductImage(res.data.imageUrl);
      document.getElementById('image-input').value = '';
      setProductImagePreview(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 ">
      <h3 className="mb-5 font-serif text-xl ">Add New Product</h3>
      <form className="flex gap-3 items-center justify-between w-full max-w-[400px] ">
        <input
          id="image-input"
          type="file"
          accept="image/*"
          onChange={(e) => {
            setProductImage(e.target.files[0]);
            setProductImagePreview(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <button
          className="p-1 font-bold text-white duration-300 rounded-md bg-amber-600 hover:opacity-65 whitespace-nowrap "
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
          className="w-full p-1 text-sm border rounded-md border-amber-600 "
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
          className="w-full p-1 text-sm border rounded-md border-amber-600 "
        />
        <textarea
          placeholder="Description"
          value={productDesc}
          onChange={(e) => setProductDesc(e.target.value)}
          className="w-full p-1 text-sm border rounded-md border-amber-600 "
        />
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="w-full p-1 text-sm border rounded-md border-amber-600 "
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
          className="self-center p-1 font-bold text-white duration-300 rounded-md bg-amber-600 hover:opacity-65 whitespace-nowrap "
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
