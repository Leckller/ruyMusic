/* eslint-disable max-len */

import { useEffect, useState } from 'react';
import PlaylistCard from '../components/Inicio/PlaylistCard';
import albumGenres from '../services/AlbumGenres';
import { AlbumType } from '../types';
import CarrouselAlbums from '../components/Inicio/CarrouselAlbums';

function Inicio() {
  const [teste, setTeste] = useState<AlbumType[]>([]);
  useEffect(() => {
    albumGenres('car').then((r) => setTeste(r));
  }, []);
  return (
    <main id="#mainContent" className="min-h-screen flex flex-col gap-5 p-3">
      <section className="flex flex-row w-full justify-start gap-5 flex-wrap">
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
        <PlaylistCard title="Músicas Curtidas" />
      </section>
      <section className="flex flex-col">
        <div>
          <h1 className="font-bold text-lg">Suas músicas estão com saudade</h1>
          <CarrouselAlbums albums={ teste } />
        </div>
      </section>
    </main>
  );
}

export default Inicio;
