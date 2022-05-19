import backgroundImage from "../../../Assets/Images/19333445.jpg"
import "../CSS/Homepage.css"

function Homepage(){


	return (
		<div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
			{/*<a href='https://www.freepik.com/vectors/alien-planet'>Alien planet vector created by vectorpouch - www.freepik.com</a>*/}
		</div>
	)
}

export default Homepage;