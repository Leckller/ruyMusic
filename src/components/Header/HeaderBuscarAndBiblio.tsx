import { RiSearch2Fill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

function HeaderBuscarAndBiBlio() {
  const { pathname } = useLocation();
  return (
    <>
      <button className="w-1/4">
        <img src="" alt="perfil" />
      </button>

      <h1 className="w-1/4 text-xl font-extrabold">
        {pathname === '/buscar' ? 'Buscar' : 'Sua Biblioteca'}

      </h1>

      <RiSearch2Fill className="w-1/4 scale-150 mb-1" />
      <IoMdAdd className="w-1/4 scale-150 mb-1" />
    </>
  );
}

export default HeaderBuscarAndBiBlio;
