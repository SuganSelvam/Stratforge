import "../CSS/WidgetsSearchBar.css"

function WidgetsSearchBar(props) {

	const searchQuery = props.searchQuery;
	const setSearchQuery = props.setSearchQuery;

	return (<div className="widgetsSearchBar-inputGroup">
		<input className='WidgetsSearchBar-inputItem' placeholder='Search....' value={searchQuery}
		       onChange={e => setSearchQuery(e.target.value)} type='text'/>
	</div>)
}

export default WidgetsSearchBar;