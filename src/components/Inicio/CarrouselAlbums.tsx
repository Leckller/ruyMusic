import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AlbumType } from '../../types';

function CarrouselAlbums({ albums }: { albums: AlbumType[] }) {
  const [visible, setVisible] = useState(12);
  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry.some((ent) => ent.isIntersecting) && albums.length !== 0) {
        setVisible((prev) => prev + 6);
      }
    });
    observer.observe(document.querySelector('#lastPoint') as Element);
  }, [albums.length]);
  return (
    <div
      className="flex flex-col flex-wrap w-full overflow-x-auto h-64
          gap-3"
    >
      {albums && albums.slice(0, visible).map((alb) => (
        <Link
          to={ `/album/${alb.collectionId}` }
          className="w-[200px] flex flex-col items-center text-start
          animate-opac"
          key={ alb.collectionId }
        >
          <div className="bg-gray-900 w-full flex items-center justify-center">
            <img
              src={ alb.artworkUrl100 }
              alt={ alb.collectionName }
            />
          </div>

          <h2 className="truncate w-full">
            {alb.collectionName ? alb.collectionName : 'unknow'}

          </h2>
          <h3 className="truncate w-full text-gray-400">
            {alb.artistName}

          </h3>
        </Link>
      ))}
      <div className="p-28" id="lastPoint" />
    </div>
  );
}

export default CarrouselAlbums;
