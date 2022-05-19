import {useEffect, useState} from "react";
import * as utils from "../../../../Utils/Utils";
import "../CSS/WidgetsDescription.css"


function WidgetsDescription(props) {

	const API_URI = props.API_URI;
	const queryPath = props.queryPath;
	const [WidgetsDescriptionData, setWidgetsDescriptionData] = useState({});


	useEffect(() => {
		loadData();
	}, [])

	function loadData() {
		fetch(API_URI + "/" + queryPath).then(response => response.json()).then(data => setWidgetsDescriptionData(data))
	}

	const renderValuesFromArray = (array, arrayName) => {
		return (
			array?.map((element, idx) => {
				if (typeof element === 'string' && element.includes("http") && !element.includes(".jpg")) {
					return (
						<div className='widgetsDescriptionItem-detailSection' key={idx}>
							<div
								className='widgetsDescriptionItem-detailLabel'>{utils.stringCaseConvert(arrayName, "_")} : {idx}</div>
							<a className='widgetsDescriptionItem-detailValue' rel='noreferrer' href={element}
							   target='_blank'>{element}</a>
						</div>
					)
				} else if (typeof element === 'string' && element.includes(".jpg")) {
					return (
						<>
							<img className='image-container' src={element} alt={arrayName + "_" + idx}/>
						</>

					)
				} else if (typeof element === 'object')
					return (
						<div className="">
							{renderValuesFromObject(element)}
						</div>
					)
			})
		)
	}


	const renderValuesFromObject = (object) => {
		return (
			object && Object.keys(object)?.map((element, index) => {
				if (typeof object[element] === 'string' || typeof object[element] === 'number' && !Array.isArray(object[element])) {
					return (
						<div className='widgetsDescriptionItem-detailSection' key={index}>
							<div
								className='widgetsDescriptionItem-detailLabel'>{utils.stringCaseConvert(element, "_")}</div>
							{
								typeof object[element] === 'string' && object[element].includes("http") ?
									<a className='widgetsDescriptionItem-detailValue' rel='noreferrer'
									   href={object[element]}
									   target='_blank'>{object[element]}</a>
									: <div className='widgetsDescriptionItem-detailValue'>{object[element]}</div>
							}
						</div>
					)
				} else if (Array.isArray(object[element])){
					return (
						renderValuesFromArray(object[element],element)
					)
				} else if (typeof object[element] === 'object') {
					return (
						renderValuesFromObject(object[element])
					)
				}
			})
		);
	};

	return (
		<div className='widgetsDescriptionItem-container'>
			<div className='widgetsDescriptionItem-subTitle'>Basic Details & Description</div>
			{
				Object.keys(WidgetsDescriptionData)?.map((data, index) => {
					if (typeof WidgetsDescriptionData[data] === "string" || typeof WidgetsDescriptionData[data] === "boolean" || typeof WidgetsDescriptionData[data] === "number") {
						return (
							<div className='widgetsDescriptionItem-detailSection' key={index}>
								<div
									className='widgetsDescriptionItem-detailLabel'>{utils.stringCaseConvert(data, "_")}</div>
								<div
									className='widgetsDescriptionItem-detailValue'>{WidgetsDescriptionData[data].toString()}</div>
							</div>
						)
					}

				})
			}
			<div className='widgetsDescriptionItem-subTitle'>Other Details & Description</div>
			{
				Object.keys(WidgetsDescriptionData)?.map((data, index) => {
					if (Array.isArray(WidgetsDescriptionData[data]) && WidgetsDescriptionData[data].length > 0) {
						return (
							<>
								<div className='widgetsDescriptionItem-detailSubtitle'
								     key={index}>{utils.stringCaseConvert(data, "_")}</div>
								{
									renderValuesFromArray(WidgetsDescriptionData[data], data)
								}
							</>
						)
					}

				})
			}
			{
				Object.keys(WidgetsDescriptionData)?.map((data, index) => {
					if (typeof WidgetsDescriptionData[data] === "object" && !Array.isArray(WidgetsDescriptionData[data]) && WidgetsDescriptionData[data] != null && WidgetsDescriptionData[data].length !== 0) {
						return (
							<>
								<br/>
								<div className='widgetsDescriptionItem-detailSubtitle'
								     key={index}>{utils.stringCaseConvert(data, "_")}</div>
								{
									renderValuesFromObject(WidgetsDescriptionData[data])
								}
							</>
						)
					}
				})
			}

		</div>
	)
}

export default WidgetsDescription;