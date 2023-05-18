import React from 'react';


const Playlist = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Benim Çalma Listem</h1>
            <ul className="space-y-2">
                <li className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/50"alt="Cover Image" className="rounded-full" />
                    <div className="mx-4, my-4">
                        <h2 className="text-lg font-medium">Şarkı İsmi   </h2>
                        <p className="text-gray-500">Sanatçı Adı   </p>
                    </div>
                </li>
                <li className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/50" alt="Cover Image" className="rounded-full" />
                    <div className="mx-4, my-4">
                        <h2 className="text-lg font-medium">Şarkı İsmi</h2>
                        <p className="text-gray-500">Sanatçı Adı</p>
                    </div>
                </li>
                <li className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/50" alt="Cover Image" className="rounded-full" />
                    <div className=" mx-4, my-4">
                        <h2 className="text-lg font-medium">Şarkı İsmi</h2>
                        <p className="text-gray-500">Sanatçı Adı</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};


export default Playlist;
