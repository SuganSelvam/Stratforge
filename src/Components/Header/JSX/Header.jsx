import "../CSS/Header.css"

function Header() {
	function handlePageNavigate(path) {
		window.location.href = window.location.origin + "/" + path;
	}

	return (
		<div className="header-Container">
			<div className="headerTitle">Stratforge-SpaceX</div>
			<div className="header-listGroup">
				<div className="header-ListItem" onClick={() => handlePageNavigate("")}>HomePage</div>
				<div className="header-ListItem" onClick={() => handlePageNavigate("history")}>History</div>
				<div className="header-ListItem" onClick={() => handlePageNavigate("launches")}>Launches</div>
				<div className="header-ListItem" onClick={() => handlePageNavigate("rockets")}>Rockets</div>
			</div>
		</div>
	)
}

export default Header;