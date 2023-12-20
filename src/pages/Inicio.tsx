/* eslint-disable max-len */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlaylistCard from '../components/Inicio/PlaylistCard';
import { Dispatch, GlobalState } from '../types';
import DivCarrousel from '../components/Inicio/DivCarrousel';
import { fetchAlbums } from '../redux/actions/AllMusicsActions';
import DivLoading from '../components/DivLoading';
import inicioAlbums from '../utils/inicioAlbums';

function Inicio() {
  const { Loading } = useSelector((state:GlobalState) => state.AllMusicsReducer);
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    inicioAlbums.forEach(({ Sh }) => dispatch(fetchAlbums(Sh)));
  }, []);
  return (
    <main id="#mainContent" className="min-h-screen flex flex-col gap-5 p-3">
      <section className="flex flex-row w-full justify-start gap-5 flex-wrap">
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
      </section>
      <section className="flex flex-col">
        {Loading ? (
          <DivLoading />
        ) : (
          inicioAlbums.map(({ Sh, Ti }) => (
            <DivCarrousel
              albumsSearch={ Sh }
              key={ Sh }
              title={ Ti }
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Inicio;
