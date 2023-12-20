import { AlbumType } from '../types';

const searchAlbumsAPI = async (artist: string): Promise<AlbumType[]> => {
  const artistNameURL = encodeURI(artist);

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results }: { results: AlbumType[] } = await APIResponse.json();

  const response = results.map((artistInfo) => ({
    ...artistInfo,
    artworkUrl100: artistInfo.artworkUrl100.replace('100x100', '200x200') }));
  return response;
};

export default searchAlbumsAPI;
