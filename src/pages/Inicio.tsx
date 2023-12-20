/* eslint-disable max-len */

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PlaylistCard from '../components/Inicio/PlaylistCard';
import albumGenres from '../services/AlbumGenres';
import { AlbumType, GlobalState } from '../types';
import AllAlbums from '../services/AllAlbums';
import DivCarrousel from '../components/Inicio/DivCarrousel';
import Loading from '../components/Loading';

function Inicio() {
  const [teste, setTeste] = useState<AlbumType[]>([]);
  const { LVA } = useSelector((state:GlobalState) => state.AllMusicsReducer);
  useEffect(() => {
    albumGenres('rock', 200).then((r) => {
      setTeste(r);
      // console.log(r);
    });
    AllAlbums(LVA).then((resp) => console.log(resp));
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
        {teste.length !== 0 ? (
          <DivCarrousel albums={ teste } title="Recomendações" />
        ) : (<Loading />)}
      </section>
    </main>
  );
}

export default Inicio;
