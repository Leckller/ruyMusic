import { AlbumType } from '../../types';

function AlbumHeader({ album }: { album: AlbumType }) {
  return (
    <>
      <section
        className="flex flex-col relative bg-gradient-to-b
      from-purple-400 bia via-bg-purple-950 to-black"
      >
        <div className="flex items-center justify-center">
          <button className="absolute left-5 top-0">voltar</button>
          <img src={ album.artworkUrl100 } alt="" />
        </div>
        <h1>title</h1>
        <div>
          <img src="" alt="" />
          <h2>name</h2>
        </div>
        <div>
          date
        </div>
      </section>
      <section>
        <button>like</button>
        <button>options</button>
      </section>
    </>
  );
}

export default AlbumHeader;
