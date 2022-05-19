import {useEffect, useState} from "react";
import {LAUNCHES_URI} from "../../../../Constants/URI_Constants";
import "../CSS/Launches.css"
import WidgetsCard from "../../../Common/WidgetsCard/JSX/WidgetsCard";
import WidgetsSearchBar from "../../../Common/WidgetsSearchBar/JSX/WidgetsSearchBar";

function Launches() {

	const [launchesData, setLaunchesData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const visibleDetailsArray = ['flight_number', 'mission_name', 'launch_date_local', 'launch_site'];
	const searchAgainst = ["mission_name"];

	useEffect(() => {
		loadData();
	}, [])

	function loadData() {
		fetch(LAUNCHES_URI).then(response => response.json()).then(data => setLaunchesData(data))
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
				{filteredData(launchesData)?.map((data, index) => {
					return (<WidgetsCard data={data} key={index} title="Launches" queryPath={data["flight_number"]}
					                     visibleDetailsArray={visibleDetailsArray}/>)
				})}
			</div>
		</div>
	</div>)

}

export default Launches;


