import React from 'react';
import { useTranslation } from 'react-i18next';

const Playlist = () => {
    const { t } = useTranslation();
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{t("my-playlist")}</h1>
            <ul className="space-y-2">
                <li className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/50"alt="Cover Image" className="rounded-full" />
                    <div className="mx-4, my-4">
                        <h2 className="text-lg font-medium">{t("song-name")}  </h2>
                        <p className="text-gray-500">{t("artist-name")}   </p>
                    </div>
                </li>
                <li className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/50" alt="Cover Image" className="rounded-full" />
                    <div className="mx-4, my-4">
                        <h2 className="text-lg font-medium">{t("song-name")}</h2>
                        <p className="text-gray-500">{t("artist-name")}</p>
                    </div>
                </li>
                <li className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/50" alt="Cover Image" className="rounded-full" />
                    <div className=" mx-4, my-4">
                        <h2 className="text-lg font-medium">{t("song-name")}</h2>
                        <p className="text-gray-500">{t("artist-name")}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Playlist;
