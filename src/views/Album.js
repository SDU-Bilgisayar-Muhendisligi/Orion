import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Album() {
  const { t } = useTranslation();
  const [playlist, setPlaylist] = useState([]);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [songs, setSongs] = useState([
    { artist: "Artist 1", name: "Song 1" },
    { artist: "Artist 2", name: "Song 2" },
    { artist: "Artist 3", name: "Song 3" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    const newAlbum = { name: albumName, songs: [...songs, { artist: artistName, name: songName }] };
    setPlaylist([...playlist, newAlbum]);
    setSongName("");
    setArtistName("");
    setAlbumName("");
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
      {t("make-album")}
      </h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="album-name"
            className="block text-sm font-semibold text-gray-800"
          >
            {t("name-album")}
          </label>
          <input
            type="text"
            id="album-name"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-black border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="song-name"
            className="block text-sm font-semibold text-gray-800"
          >
            {t("sarki-ismi")}
          </label>
          <input
            type="text"
            id="song-name"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-black border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          
        </div>
        <div className="mb-2">
          <label
            htmlFor="artist-name"
            className="block text-sm font-semibold text-gray-800"
          >
            {t("sanatci-ismi")}
          </label>
          <input
            type="text"
            id="artist-name"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-black border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
          {t("sarki-ekle")}
          </button>
        </div>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Şarkı Listesi</h2>
        <ul className="list-disc list-inside">
          {songs.map((song, index) => (
            <li key={index}>
              {song.artist} - {song.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Playlist</h2>
        {playlist.map((album, index) => (
          <div key={index} className="border-b-2 border-gray-300 py-2">
            <p className="font-semibold mb-2">{album.name}</p>
            <ul className="list-disc list-inside ml-4">
              {album.songs.map((song, index) => (
                <li key={index}>
                  {song.artist} - {song.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;