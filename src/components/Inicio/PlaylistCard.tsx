import { FaHeart } from 'react-icons/fa';

function PlaylistCard({ title, image = '' }: { title: string, image?: string }) {
  return (
    <button
      className="w-40 flex-grow h-16 gap-2 rounded-lg bg-gray-600
   flex flex-row"
    >
      <div className="w-1/3 flex items-center justify-center">
        {image !== '' ? (
          <img src={ image } alt={ title } />
        ) : (
          <div
            className="p-5 w-full h-full flex items-center justify-center
          rounded-l-lg bg-gradient-to-br from-blue-800 via-blue-400 to-blue-200"
          >
            <FaHeart className="scale-125" />
          </div>
        )}
      </div>
      <div className="w-full flex items-center">
        <h2 className="">
          Músicas Curtidas
        </h2>
      </div>
    </button>
  );
}

export default PlaylistCard;
