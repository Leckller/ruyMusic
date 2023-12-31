import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type AlbumType = {
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  artworkUrl60: string;
  releaseDate: string;
  trackCount: number;
  collectionType: string;
  primaryGenreName: string,
};

export type SongType = {
  trackId: number,
  trackName: string,
  previewUrl: string,
  trackTimeMillis: number,
};

export type AlbumUserType = {
  infos: {
    name: string,
    image: string,
    alt: string,
    path: string,
  },
  songs: SongType[],
};

export type UserType = {
  name: string,
  password: string,
  favoriteSongs: SongType[],
  image: string,
  on: boolean,
  albums: AlbumUserType[],
};

export type AllMscTypeReducer = {
  LVA: string[],
  Pesquisas: { search: string, albums: AlbumType[] }[],
  Loading: { [key: string]: boolean },
  ActSearch: [AlbumType, SongType[]],
};

export type GlobalState = {
  AllMusicsReducer: AllMscTypeReducer
};

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;
