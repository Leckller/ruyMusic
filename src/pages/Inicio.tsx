/* eslint-disable max-len */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlaylistCard from '../components/Inicio/PlaylistCard';
import { Dispatch, GlobalState } from '../types';
import DivCarrousel from '../components/Inicio/DivCarrousel';
import { fetchAlbums } from '../redux/actions/AllMusicsActions';
import inicioAlbums from '../utils/inicioAlbums';

function Inicio() {
  const dispatch: Dispatch = useDispatch();
  const { Pesquisas } = useSelector((s:GlobalState) => s.AllMusicsReducer);
  useEffect(() => {
    if (!Pesquisas.some((i) => i.search === 'pagode')) {
      inicioAlbums.forEach(({ Sh }) => dispatch(fetchAlbums(Sh)));
    }
  }, []);
  return (
    <main id="#mainContent" className="min-h-screen flex flex-col gap-5 p-3">
      <section className="flex flex-row w-full justify-start gap-5 flex-wrap">
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
      </section>
      <section className="flex gap-3 mb-10 flex-col">
        {
          inicioAlbums.map(({ Sh, Ti }) => (
            <DivCarrousel
              albumsSearch={ Sh }
              key={ Sh }
              title={ Ti }
            />
          ))
        }
      </section>
    </main>
  );
}

export default Inicio;
