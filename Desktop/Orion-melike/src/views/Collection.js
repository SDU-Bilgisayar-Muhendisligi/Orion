import Section from "components/Section";
import songs from "data/songs"
function Collection() {
	return (
<div className="grid gap-y-8">
			<Section
				title="Kitaplık Albümler"
				more="/blabla"
				items={songs}
			/>
			
		</div>
	)
}


export default Collection