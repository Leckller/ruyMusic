import { useSelector } from 'react-redux';
import CarrouselAlbums from './CarrouselAlbums';
import { GlobalState } from '../../types';

function DivCarrousel({ albumsSearch, title }: { title: string, albumsSearch: string }) {
  const { Pesquisas } = useSelector((state:GlobalState) => state.AllMusicsReducer);
  const albumIndex = Pesquisas.findIndex(({ search }) => search === albumsSearch);
  const { albums } = Pesquisas[albumIndex];
  return (
    <div>
      <h1 className="font-bold text-lg">{title}</h1>
      <CarrouselAlbums albums={ albums } />
    </div>
  );
}

export default DivCarrousel;
