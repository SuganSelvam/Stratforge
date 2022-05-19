import {useEffect, useState} from "react";
import {ROCKETS_URI} from "../../../../Constants/URI_Constants";
import WidgetsCard from "../../../Common/WidgetsCard/JSX/WidgetsCard";
import WidgetsSearchBar from "../../../Common/WidgetsSearchBar/JSX/WidgetsSearchBar";

function Rockets() {

	const [rocketsData, setRocketsData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const visibleDetailsArray = ['rocket_name', 'description', 'first_flight', 'success_rate_pct', 'country']
	const searchAgainst = ["description", "country", "rocket_name"]

	useEffect(() => {
		loadData();
	}, [])

	function loadData() {
		fetch(ROCKETS_URI).then(response => response.json()).then(data => setRocketsData(data))
	}

	function filteredData(data) {
		return data.filter((item) => searchAgainst.some(key => item[key].toLowerCase().includes(searchQuery.toLowerCase())))
	}

	return (<div className='widgets-container' >
		<div className="WidgetsSearchContainer">
			<WidgetsSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
		</div>
		<div className="launchData-container">
			<div className="launchData-listContainer">
				{filteredData(rocketsData)?.map((data, index) => {
					return (<>
						<WidgetsCard data={data} key={index} title="Rockets" queryPath={data["rocket_id"]}
						             visibleDetailsArray={visibleDetailsArray}/>
					</>)
				})}
			</div>
		</div>
	</div>)

}

export default Rockets;


