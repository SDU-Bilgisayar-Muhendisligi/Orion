import Section from "components/Section";
import songs from "data/songs"
import { useTranslation } from 'react-i18next';
function Home() {
	const { t } = useTranslation();
	return (
		<div className="grid gap-y-8">
			<Section
				title={t("populer-radio")}
				more="/blabla"
				items={songs}
			/>
			<Section
				title={t("populer-albums")}
				more="/blabla"
				items={songs}
			/>
			<Section
				title={t("made-for-you")}
				more="/blabla"
				items={songs}
			/>
		</div>
	)

	
}

export default Home
