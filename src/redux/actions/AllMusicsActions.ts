export const ActionsAllMusic = {
  LAST_VISITED_ALBUMS: 'LAST_VISITED_ALBUMS',
};

export const lastVisitedAlbums = (albumId: string) => ({
  type: ActionsAllMusic.LAST_VISITED_ALBUMS,
  payload: albumId,
});
