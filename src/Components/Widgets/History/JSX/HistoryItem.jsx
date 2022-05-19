import {useParams} from "react-router";
import {HISTORY_URI} from "../../../../Constants/URI_Constants";
import WidgetsDescription from "../../../Common/WidgetsDescription/JSX/WidgetsDescription";

function HistoryItem() {

	const {historyItem} = useParams();

	return (
			<WidgetsDescription API_URI={HISTORY_URI} queryPath={historyItem} />
	)
}

export default HistoryItem;