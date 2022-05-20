import "../CSS/DescriptionCard.css"
import * as utils from "../../../../Utils/Utils";

function DescriptionCard(props) {
	const data = props.data;
	const formattedData = props.formattedData;
	return (
		<div className="descriptionCard-cardContainer cardContainer">
			<div className="descriptionCard-subTitle">{utils.stringCaseConvert(data, "_")}</div>
			<div className="descriptionCard-cardSection">
				{
					Object.keys(formattedData[data])?.map((key, index) => {
						if (formattedData[data][key] != null && !formattedData[data][key]?.toString().includes("http") && !formattedData[data][key]?.toString().includes(".jpg")) {
							return (
								<div className="descriptionCard-cardDetail">
									<div className='descriptionCard-cardLabel'>{utils.stringCaseConvert(key, "_")}</div>
									<div className='descriptionCard-cardValue'>{formattedData[data][key]}</div>
								</div>
							)
						} else if (formattedData[data][key] != null && formattedData[data][key]?.toString().includes("http") && !formattedData[data][key]?.toString().includes(".jpg")) {
							return (
								<div className="descriptionCard-cardDetail">
									<div className='descriptionCard-cardLabel'>{utils.stringCaseConvert(key, "_")}</div>
									<a className='descriptionCard-cardValue' rel='noreferrer' target='_blank' href={formattedData[data][key]} >{formattedData[data][key]}</a>
								</div>
							)
						} else if (formattedData[data][key] == null) {
							return (
								<div className="descriptionCard-cardDetail">
									<div className='descriptionCard-cardLabel'>{utils.stringCaseConvert(key, "_")}</div>
									<div className='descriptionCard-cardValue'>Data Unavailable</div>
								</div>
							)
						}
					})
				}
			</div>
			<div className='descriptionCard-cardImageDetail'>
				{
					Object.keys(formattedData[data])?.map((key, index) => {
						if (formattedData[data][key]?.toString().includes("http") && (formattedData[data][key]?.toString().includes(".jpg") || formattedData[data][key]?.toString().includes(".png")) ){
							return (
								<img alt={key} src={formattedData[data][key]} className="descriptionCard-cardImage"/>
							)
						}
					})
				}
			</div>
		</div>
	)
}

export default DescriptionCard;