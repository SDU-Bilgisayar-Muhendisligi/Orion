import { Icon } from "Icons"
import { useTranslation } from 'react-i18next';

function DownloadApp() {
	const { t } = useTranslation();

	return (
		<a href="#" className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-4 items-center px-6">
			<Icon name="download" size={20} />
			{t("download-app")}
		</a>
	)
}

export default DownloadApp