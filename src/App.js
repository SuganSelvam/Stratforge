import './App.css';
import Launches from "./Components/Widgets/Launches/JSX/Launches";
import Header from "./Components/Header/JSX/Header";
import {Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage/JSX/Homepage";
import LaunchesItem from "./Components/Widgets/Launches/JSX/LaunchesItem";
import History from "./Components/Widgets/History/JSX/History";
import HistoryItem from "./Components/Widgets/History/JSX/HistoryItem";
import Rockets from "./Components/Widgets/Rockets/JSX/Rockets";
import RocketsItem from "./Components/Widgets/Rockets/JSX/RocketsItem";

function App() {
	return (
		<div className="App">
			<Header/>
			<Routes>
				<Route path="/" element={<Homepage/>}/>

				<Route path="/history" element={<History/>}/>
				<Route path="/history/:historyItem" element={<HistoryItem/>}/>

				<Route path="/launches" element={<Launches/>}/>
				<Route path="/launches/:launchesItem" element={<LaunchesItem/>}/>

				<Route path="/rockets" element={<Rockets/>}/>
				<Route path="/rockets/:rocketsItem" element={<RocketsItem/>}/>

			</Routes>
		</div>
	);
}

export default App;
