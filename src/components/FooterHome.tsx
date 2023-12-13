import { useLocation, useNavigate } from 'react-router-dom';
import { BsHouseDoor, BsHouseDoorFill } from 'react-icons/bs';
import { RiSearch2Fill, RiSearchLine } from 'react-icons/ri';
import { IoLibrary, IoLibraryOutline } from 'react-icons/io5';

function FooterHome() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <footer
      className="fixed bottom-0 h-16 flex items-center
        justify-around w-full bg-gradient-to-t from-gray-900 to-transparent
      "
    >
      <button
        className="w-1/3 flex flex-col items-center"
        onClick={ () => navigate('/inicio') }
      >
        <div className="scale-150">
          {pathname === '/inicio' ? (<BsHouseDoorFill />) : (<BsHouseDoor />)}
        </div>
        Inicio

      </button>
      <button
        className="w-1/3 flex flex-col items-center"
        onClick={ () => navigate('/buscar') }
      >
        <div className="scale-150">
          {pathname === '/buscar' ? (<RiSearch2Fill />) : (<RiSearchLine />)}
        </div>
        Buscar

      </button>
      <button
        className="w-1/3 flex flex-col items-center"
        onClick={ () => navigate('/biblioteca') }
      >
        <div className="scale-150">
          {pathname === '/biblioteca' ? (<IoLibrary />) : (<IoLibraryOutline />)}
        </div>
        Sua Biblioteca

      </button>
    </footer>
  );
}

export default FooterHome;
