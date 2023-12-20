import CarrouselAlbums from './CarrouselAlbums';
import { AlbumType } from '../../types';

function DivCarrousel({ albums, title }: { title: string, albums: AlbumType[] }) {
  return (
    <div>
      <h1 className="font-bold text-lg">{title}</h1>
      <CarrouselAlbums albums={ albums } />
    </div>
  );
}

export default DivCarrousel;
