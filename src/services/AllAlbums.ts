async function AllAlbums(albums: string[]) {
  const request = await fetch(`https://api.music.apple.com/v1/catalog/us/albums?ids=${albums}`);
  console.log(`https://api.music.apple.com/v1/catalog/br/albums?ids=${albums}`);
  const data = await request.json();
  return data;
}

export default AllAlbums;
