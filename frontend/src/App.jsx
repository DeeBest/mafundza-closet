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

const App = () => {
  return (
    <div className="relative flex flex-col min-w-full min-h-full">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          <Route path="/products/add-product" element={<AddProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
