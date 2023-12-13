import { Outlet } from 'react-router-dom';
import HeaderHome from './Header/HeaderHome';
import FooterHome from './FooterHome';

function Layout() {
  return (
    <div className="min-h-screen min-w-full flex flex-col">
      <HeaderHome />
      <Outlet />
      <FooterHome />
    </div>
  );
}

export default Layout;
