import {useParams} from "react-router";
import WidgetsDescription from "../../../Common/WidgetsDescription/JSX/WidgetsDescription";
import {ROCKETS_URI} from "../../../../Constants/URI_Constants";

function RocketsItem() {

	const {rocketsItem} = useParams();

	return (
		<WidgetsDescription API_URI={ROCKETS_URI} queryPath={rocketsItem}/>
	)
}

export default RocketsItem;