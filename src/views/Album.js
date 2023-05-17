import React, { useState } from 'react';

function Album() {
  const [playlist, setPlaylist] = useState([]);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [songs, setSongs] = useState([
    { artist: "Artist 1", name: "Song 1" },
    { artist: "Artist 2", name: "Song 2" },
    { artist: "Artist 3", name: "Song 3" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    setPlaylist([...playlist, `${artistName} - ${songName}`]);
    setSongName("");
    setArtistName("");
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
        Albüm Oluştur
      </h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="song-name"
            className="block text-sm font-semibold text-gray-800"
          >
            Şarkı İsmi
          </label>
          <input
            type="text"
            id="song-name"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="artist-name"
            className="block text-sm font-semibold text-gray-800"
          >
            Sanatçı İsmi
          </label>
          <input
            type="text"
            id="artist-name"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            Şarkı Ekle
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
        {playlist.map((song, index) => (
          <p key={index} className="border-b-2 border-gray-300 py-2">
            {song}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Album;


