import {useEffect, useState} from "react";
import {HISTORY_URI} from "../../../../Constants/URI_Constants";
import WidgetsCard from "../../../Common/WidgetsCard/JSX/WidgetsCard";
import WidgetsSearchBar from "../../../Common/WidgetsSearchBar/JSX/WidgetsSearchBar";

function History() {

	const [historyData, setHistoryData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const visibleDetailsArray = ['title', 'event_date_utc', 'details']
	const searchAgainst = ["details", 'title'];

	useEffect(() => {
		loadData();
	}, [])

	function loadData() {
		fetch(HISTORY_URI).then(response => response.json()).then(data => setHistoryData(data))
	}

	function filteredData(data) {
		return data.filter((item) => searchAgainst.some(key => item[key].toLowerCase().includes(searchQuery.toLowerCase())))
	}

	return (<div className='widgets-container'>
		<div className="WidgetsSearchContainer">
			<WidgetsSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
		</div>
		<div className="launchData-container">
			<div className="launchData-listContainer">
				{filteredData(historyData)?.map((data, index) => {
					return (<WidgetsCard data={data} key={index} title="History" queryPath={data["id"]}
					                     visibleDetailsArray={visibleDetailsArray}/>)
				})}
			</div>
		</div>
	</div>)

}

export default History;


