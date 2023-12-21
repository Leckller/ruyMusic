import searchAlbumsAPI from '../../services/albumsApi';
import getMusics from '../../services/musicsApi';
import { AlbumType, Dispatch, SongType } from '../../types';

export const ActionsAllMusic = {
  LAST_VISITED_ALBUMS: 'LAST_VISITED_ALBUMS',
  FETCH_ALBUMS_COMPLETE: 'FETCH_ALBUMS_COMPLETE',
  FETCH_LOADING_ALBUMS: 'FETCH_LOADING_ALBUMS',
  FETCH_ID_COMPLETE: 'FETCH_ID_COMPLETE',
};

export const lastVisitedAlbums = (albumId: string) => ({
  type: ActionsAllMusic.LAST_VISITED_ALBUMS,
  payload: albumId,
});

const fetchAlbumsComplete = (albums: AlbumType[], search: string) => ({
  type: ActionsAllMusic.FETCH_ALBUMS_COMPLETE,
  payload: { albums, search },
});

export const fetchLoadingAlbums = (search: string, boolean: boolean) => ({
  type: ActionsAllMusic.FETCH_LOADING_ALBUMS,
  payload: { search, boolean },
});

const fetchIdComplete = (id:string, album:[AlbumType, ...SongType[]]) => ({
  type: ActionsAllMusic.FETCH_ID_COMPLETE,
  payload: { album, id },
});

export const fetchAlbums = (search: string) => {
  return async (disp: Dispatch) => {
    try {
      disp(fetchLoadingAlbums(search, true));
      const fetch = await searchAlbumsAPI(search);
      disp(fetchAlbumsComplete(fetch, search));
      disp(fetchLoadingAlbums(search, false));
    } catch (error: any) {
      // eslint-disable-next-line no-alert
      window.alert(error);
    }
  };
};

export const fetchById = (id:string) => {
  return async (disp:Dispatch) => {
    try {
      const fetch = await getMusics(id);
      disp(fetchIdComplete(id, fetch));
    } catch (error:any) {
      // eslint-disable-next-line no-alert
      disp(fetchIdComplete(id, [] as any));
    }
  };
};
