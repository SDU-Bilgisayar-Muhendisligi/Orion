import Section from "components/Section";
import songs from "data/songs"
import { useTranslation } from 'react-i18next';
function Collection() {
	const { t } = useTranslation();
	
	return (
<div className="grid gap-y-8">
			<Section
				title={t("library")}
				more="/blabla"
				items={songs}
			/>
			
		</div>
	)
}

export default Collection