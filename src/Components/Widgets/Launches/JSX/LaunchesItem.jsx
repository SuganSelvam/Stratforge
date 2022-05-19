import {useParams} from "react-router";
import {LAUNCHES_URI} from "../../../../Constants/URI_Constants";
import WidgetsDescription from "../../../Common/WidgetsDescription/JSX/WidgetsDescription";

function LaunchesItem() {

	const {launchesItem} = useParams();

	return (
		<WidgetsDescription API_URI={LAUNCHES_URI} queryPath={launchesItem}/>
	)
}

export default LaunchesItem;