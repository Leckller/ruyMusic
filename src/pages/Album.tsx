import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { lastVisitedAlbums } from '../redux/actions/AllMusicsActions';

function Album() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(lastVisitedAlbums(id as string));
  }, []);
  return (
    <div />
  );
}

export default Album;
