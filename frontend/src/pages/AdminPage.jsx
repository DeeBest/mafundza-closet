import { Outlet, Link } from 'react-router-dom';
import { FaPlus, FaList } from 'react-icons/fa';

const AdminPage = () => {
  return (
    <div className="flex w-full gap-4 ">
      <aside className="flex flex-col gap-4 ">
        <Link
          to="/admin"
          className="flex whitespace-nowrap items-center gap-2 text-sm hover:shadow-none hover:opacity-65 duration-300 p-2 rounded-md font-bold shadow-sm shadow-[rgba(0,0,0,0.3)] "
        >
          <FaPlus className="text-green-600 " />
          <span>Add Product</span>
        </Link>
        <Link
          to="/admin/products-list"
          className="flex whitespace-nowrap items-center gap-2 text-sm hover:shadow-none hover:opacity-65 duration-300 p-2 rounded-md font-bold shadow-sm shadow-[rgba(0,0,0,0.3)] "
        >
          <FaList className="text-amber-600 " />
          <span>Products List</span>
        </Link>
      </aside>
      <Outlet />
    </div>
  );
};
export default AdminPage;
