import {useEffect, useState} from "react";
import * as utils from "../../../../Utils/Utils";
import "../CSS/WidgetsDescription.css"
import {arrayParser, objectParser} from "../../../../Utils/Utils";
import WidgetsCard from "../../WidgetsCard/JSX/WidgetsCard";
import DescriptionCard from "./DescriptionCard";

function WidgetsDescription(props) {

	const API_URI = props.API_URI;
	const queryPath = props.queryPath;
	const [widgetsDescriptionData, setWidgetsDescriptionData] = useState({});
	const [formattedData, setFormattedData] = useState({});


	useEffect(() => {
		loadData();
	}, [])

	useEffect(() => {
		formatData();
	},[widgetsDescriptionData])

	function loadData() {
		 fetch(API_URI + "/" + queryPath).then(response => response.json()).then(data => setWidgetsDescriptionData(data))
	}

	function formatData(){
		var tempObject = {};
		var stringData = {};
		Object.keys(widgetsDescriptionData).forEach((item, index) => {
			if (typeof widgetsDescriptionData[item] === "string" || typeof widgetsDescriptionData[item] === "number") {
				stringData[item] = widgetsDescriptionData[item];
			}
			if (widgetsDescriptionData[item] != null && typeof widgetsDescriptionData[item] === "object" && !Array.isArray(widgetsDescriptionData[item])) {
				var result = objectParser(widgetsDescriptionData[item]);
				tempObject[item] = result;
			}
			if (Array.isArray(widgetsDescriptionData[item])) {
				tempObject[item]= arrayParser(widgetsDescriptionData[item],item)
			}
		})
		tempObject['basic_details'] = stringData
		setFormattedData(tempObject);
	}


	return (
		<div className='widgetsDescriptionItem-container'>
			{
				Object.keys(formattedData)?.sort().map((data,index) => {
					return (
						<DescriptionCard key={index} data={data} formattedData={formattedData} />
					)
				})
			}
		</div>
	)
}

export default WidgetsDescription;