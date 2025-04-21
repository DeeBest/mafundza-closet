import { Outlet, Link } from 'react-router-dom';
import { FaPlus, FaList } from 'react-icons/fa';

const AdminPage = () => {
  return (
    <div className="flex w-full gap-4 ">
      <aside>
        <Link to="/admin">
          <FaPlus />
          <span>Add Product</span>
        </Link>
        <Link to="/admin/products-list">
          <FaList />
          <span>Products List</span>
        </Link>
      </aside>
      <Outlet />
    </div>
  );
};
export default AdminPage;
