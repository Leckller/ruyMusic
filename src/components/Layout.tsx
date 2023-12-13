import { Outlet } from 'react-router-dom';
import FooterHome from './Home/FooterHome';
import HeaderHome from './Home/HeaderHome';

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
