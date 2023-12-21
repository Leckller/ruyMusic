import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchById, lastVisitedAlbums } from '../redux/actions/AllMusicsActions';
import { Dispatch, GlobalState, SongType } from '../types';
import AlbumHeader from '../components/Album/AlbumHeader';
import AlbumBody from '../components/Album/AlbumBody';

function Album() {
  const dispatch:Dispatch = useDispatch();
  const { id } = useParams();
  const { ActSearch } = useSelector((s:GlobalState) => s.AllMusicsReducer);
  useEffect(() => {
    dispatch(lastVisitedAlbums(id as string));
    dispatch(fetchById(id as string));
  }, []);
  console.log(ActSearch);
  return (
    <main>
      {ActSearch[0] && (
        <AlbumHeader album={ ActSearch[0] } />
      )}
      {ActSearch[1] && (
        <AlbumBody songs={ ActSearch.slice(1) as unknown as SongType[] } />
      )}
    </main>
  );
}

export default Album;
