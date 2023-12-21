import { Link, useNavigate } from 'react-router-dom';
import { AlbumType } from '../../types';

function AlbumHeader({ album }: { album: AlbumType }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col bg-gradient-to-b from-purple-700 to-black"
    >
      <section className="mt-10 flex flex-col gap-5">
        <div className="flex flex-row items-center justify-center">
          <button
            className="absolute left-5 top-10"
            onClick={ () => navigate(-1) }
          >
            voltar

          </button>
          <img
            src={ album.artworkUrl100 }
            className="shadow-2xl shadow-black"
            alt={ album.collectionName }
          />
        </div>
        <div className="pl-4 flex-col flex gap-2">
          <h1 className="text-xl font-bold">{album.collectionName}</h1>
          <Link
            to={ `/artist/${album.artistId}` }
            className="flex flex-row gap-3 items-center"
          >
            <img
              src={ album.artworkUrl60.replace('60x60', '30x30') }
              className="rounded-full"
              alt=""
            />
            <h2>{album.artistName}</h2>
          </Link>
          <div>
            <h6 className="text-xs text-gray-300">
              {`${album.collectionType} ∙ ${album.releaseDate.split('-')[0]}`}
            </h6>
          </div>
        </div>
      </section>
      <section>
        <button>like</button>
        <button>options</button>
      </section>
    </div>
  );
}

export default AlbumHeader;
