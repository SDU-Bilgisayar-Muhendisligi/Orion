import {NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Title({ title, more = false }) {
	const { t } = useTranslation();
	return (
		<header className="flex items-center justify-between mb-4">

			<NavLink to={more ?? '#'}>
				<h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">{title}</h3>
			</NavLink>

			{more && (
				<NavLink className={"text-xs hover:underline font-semibold uppercase text-link tracking-wider"} to={more}>
					{t("view-all")}
				</NavLink>
			)}
		</header>
	)
}

export default Title
