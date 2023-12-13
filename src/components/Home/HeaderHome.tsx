import { useState } from 'react';

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

  return (
    <header
      className={ `flex flex-row justify-around transition-all
    ${scrollOn ? 'fixed items-center pt-2 pb-2' : 'h-16 items-end pb-2'}
     w-full bg-black` }
    >
      <button>
        <img src="" alt="perfil" />
      </button>
      <button>Tudo</button>
      <button>Música</button>
      <button>Podcast</button>
    </header>
  );
}

export default HeaderHome;
