import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import CategoryPage from './pages/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import AddProduct from './components/AddProduct';
import ErrorPage from './pages/ErrorPage';
import AdminPage from './pages/AdminPage';
import ProductsList from './components/ProductsList';

const App = () => {
  return (
    <div className="relative flex flex-col min-w-full min-h-full">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<AddProduct />} />
            <Route path="/admin/products-list" element={<ProductsList />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
