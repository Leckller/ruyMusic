/* eslint-disable max-len */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaylistCard from '../components/Inicio/PlaylistCard';
import albumGenres from '../services/AlbumGenres';
import { AlbumType } from '../types';

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
        <h1>Suas músicas estão com saudade</h1>
        <div
          className="flex flex-col flex-wrap w-full overflow-x-auto h-64
          gap-3"
        >
          {teste && teste.map((alb) => (
            <Link
              to={ `/album/${alb.collectionId}` }
              className="w-[200px] flex flex-col items-center text-start"
              key={ alb.collectionId }
            >
              <div className="bg-gray-900 w-full flex items-center justify-center">
                <img
                  src={ alb.artworkUrl100 }
                  alt={ alb.collectionName }
                />
              </div>

              <h2 className="truncate w-full">{alb.collectionName ? alb.collectionName : 'unknow'}</h2>
              <h3 className="truncate w-full text-gray-400">{alb.artistName}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Inicio;
