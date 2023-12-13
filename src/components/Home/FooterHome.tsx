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
        {pathname === '/inicio' ? (<BsHouseDoorFill />) : (<BsHouseDoor />)}
        Inicio

      </button>
      <button
        className="w-1/3 flex flex-col items-center"
        onClick={ () => navigate('/buscar') }
      >
        {pathname === '/buscar' ? (<RiSearch2Fill />) : (<RiSearchLine />)}
        Buscar

      </button>
      <button
        className="w-1/3 flex flex-col items-center"
        onClick={ () => navigate('/biblioteca') }
      >
        {pathname === '/biblioteca' ? (<IoLibrary />) : (<IoLibraryOutline />)}
        Sua Biblioteca

      </button>
    </footer>
  );
}

export default FooterHome;
