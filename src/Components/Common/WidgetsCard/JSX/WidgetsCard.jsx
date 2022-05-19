import * as utils from "../../../../Utils/Utils";
import "../CSS/WidgetsCard.css";

function WidgetsCard(props) {

	const queryPath = props.queryPath;
	const data = props.data;
	const title = props.title;
	const visibleDetailsArray = props.visibleDetailsArray;


	function handlePageNavigate() {
		window.location.href = window.location.href + "/" + queryPath;
	}

	return (
		<div className="widgetsCardData-cardContainer">
			<div className="widgetsCardData-cardTitle">
				{title} Details :
			</div>
			<div className="widgetsCardData-detailsContainer">
				{
					Object.keys(data)?.map((item, index) => {
						if (visibleDetailsArray.includes(item)) {
							if(typeof data[item] === 'string' || typeof data[item] === 'number'){
								return (
									<div className="widgetsCardData-detailsSection" key={index}>
										<div
											className="widgetsCardData-detailsLabel">{utils.stringCaseConvert(item, "_")}</div>
										<div
											className="widgetsCardData-detailsValue">{data[item]?.length > 100 ? data[item].substring(0, 100) + "..." : data[item]}</div>
									</div>
								)
							} else if( typeof data[item] === 'object'){
								return (
									<div className="widgetsCardData-detailsSection" key={index}>
										{
											Object.keys(data[item])?.map((element,idx) => {
												return (
													<>
														<div key={idx}
															className="widgetsCardData-detailsLabel">{utils.stringCaseConvert(element, "_")}</div>
														<div
															className="widgetsCardData-detailsValue">{data[item][element]?.length > 100 ? data[item][element].substring(0, 100) + "..." : data[item][element]}</div>
													</>
												)
											})
										}
									</div>
								)
							}
						}
					})
				}

			</div>
			<div className="widgetsCardData-detailsButtonGroup">
				<button type="button" className="widgetsCardData-detailsButton"
				        onClick={() => handlePageNavigate()}>Details
				</button>
			</div>
		</div>
	)
}

export default WidgetsCard;