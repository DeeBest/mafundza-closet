import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className="flex-1 w-full max-w-6xl p-4 mx-auto pt-36">
      <Outlet />
    </main>
  );
};
export default MainLayout;
