import { Outlet, useLocation } from 'react-router-dom';
import HeaderHome from './Header/HeaderHome';
import FooterHome from './FooterHome';

function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen min-w-full flex flex-col">
      {pathname.includes('/album') ? (
        ''
      ) : <HeaderHome />}
      <Outlet />
      <FooterHome />
    </div>
  );
}

export default Layout;
