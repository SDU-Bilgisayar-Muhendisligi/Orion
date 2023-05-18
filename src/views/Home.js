import Section from "components/Section";
import songs from "data/songs"

function Home() {

	return (
		<div className="grid gap-y-8">
			<Section
				title="Çok Çalınanlar"
				more="/blabla"
				items={songs}
			/>
			<Section

				title="Hayalindeki Çalma Listem"

				more="/blabla"
				items={songs}
			/>
			<Section
				title="Senin İçin Hazırladıklarımız"
				more="/blabla"
				items={songs}
			/>
		</div>
	)


}


export default Home


