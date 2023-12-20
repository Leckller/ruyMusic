import { useSelector } from 'react-redux';
import CarrouselAlbums from './CarrouselAlbums';
import { GlobalState } from '../../types';
import DivLoading from '../DivLoading';

function DivCarrousel({ albumsSearch, title }: { title: string, albumsSearch: string }) {
  const { Pesquisas, Loading } = useSelector((
    state:GlobalState,
  ) => state.AllMusicsReducer);
  const albums = Pesquisas.find((item) => item.search === albumsSearch)?.albums;
  return (
    <div>
      {Loading[albumsSearch] ? (
        <div className="flex items-center justify-center h-[300px]">
          <DivLoading />
        </div>
      ) : (
        albums && (
          <div className="animate-opac">
            <h1 className="font-bold text-lg">{title}</h1>
            <CarrouselAlbums albums={ albums } />
          </div>
        )
      )}
    </div>
  );
}

export default DivCarrousel;
