import { SongType } from '../../types';

function AlbumBody({ songs }: { songs: SongType[] }) {
  return (
    <table className="flex items-center justify-center mb-16">
      <tbody className="flex items-center flex-col justify-center">
        {songs.map((music) => (
          <tr key={ music.trackId }>
            <h2>{music.trackName}</h2>
            <audio controls src={ music.previewUrl }>
              <track kind="captions" />
              O seu navegador não suporta este elemento
              <code>audio</code>
            </audio>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AlbumBody;
