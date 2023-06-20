import { useTranslation } from 'react-i18next';
function Begenme() {
    const { t } = useTranslation();
	return (
		<div>
			{t("liked-song")}
		</div>
	)
}

export default Begenme