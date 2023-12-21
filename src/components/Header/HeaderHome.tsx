import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderInicio from './HeaderInicio';
import HeaderBuscarAndBiBlio from './HeaderBuscarAndBiblio';

function HeaderHome() {
  const [scrollOn, setScrollOn] = useState(false);
  window.addEventListener('scroll', () => {
    const Y = window.scrollY;
    if (Y > 110) {
      setScrollOn(true);
    } else {
      setScrollOn(false);
    }
  });
  const { pathname } = useLocation();
  return (
    <header
      className={ `
       flex flex-row  transition-all justify-around
    ${scrollOn ? 'fixed items-center pt-2 pb-2' : 'h-16 items-end pb-2'}
     w-full bg-black overflow-hidden` }
    >
      {pathname === '/inicio' && (
        <HeaderInicio />
      )}
      {(pathname === '/buscar' || pathname === '/biblioteca') && (
        <HeaderBuscarAndBiBlio />
      )}
    </header>
  );
}

export default HeaderHome;
