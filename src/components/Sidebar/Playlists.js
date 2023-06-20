import { useTranslation } from 'react-i18next';
function Playlists() {
	const { t } = useTranslation();
	return (
		<nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
			<ul>
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						1. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						2. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						3. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						4. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						5. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						6. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						7. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						8. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						9. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						10. {t("play-list")}
					</a>
				</li>)}
				{new Array(1).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
					    11. {t("play-list")}
					</a>
				</li>)}
			</ul>
		</nav>
	)
}

export default Playlists