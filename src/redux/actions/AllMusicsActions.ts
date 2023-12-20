import searchAlbumsAPI from '../../services/albumsApi';
import { AlbumType, Dispatch } from '../../types';

export const ActionsAllMusic = {
  LAST_VISITED_ALBUMS: 'LAST_VISITED_ALBUMS',
  FETCH_ALBUMS_COMPLETE: 'FETCH_ALBUMS_COMPLETE',
  FETCH_LOADING_ALBUMS: 'FETCH_LOADING_ALBUMS',
};

export const lastVisitedAlbums = (albumId: string) => ({
  type: ActionsAllMusic.LAST_VISITED_ALBUMS,
  payload: albumId,
});

const fetchAlbumsComplete = (albums: AlbumType[], search: string) => ({
  type: ActionsAllMusic.FETCH_ALBUMS_COMPLETE,
  payload: { albums, search },
});

const fetchLoadingAlbums = (search: string) => ({
  type: ActionsAllMusic.FETCH_LOADING_ALBUMS,
  payload: search,
});

export const fetchAlbums = (search: string) => {
  return async (disp: Dispatch) => {
    disp(fetchLoadingAlbums(search));
    try {
      const fetch = await searchAlbumsAPI(search);
      disp(fetchAlbumsComplete(fetch, search));
    } catch (error: any) {
      // eslint-disable-next-line no-alert
      window.alert(error);
    }
  };
};
