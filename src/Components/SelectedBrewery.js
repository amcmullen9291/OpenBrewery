import { Link, useParams} from 'react-router-dom';

const SelectedBrewery = () => {
    const brewery = useParams();
    return (
        <>
        <Link to={"/CityBreweries"}>Return to the Lobby</Link>
        <hr/>
        <div id="endpoint">
        <p>"You made it."</p>
        <center id="sign">{brewery.name}</center>

        <div>
            <p className="waiver">Overview:<br/><br/>
This is the dataset which is served by the official Open Brewery DB API.

The goal is to provide an approval process pipeline. It is a work in progress.</p>
        </div>
        </div>
        </>
    )
}

export default SelectedBrewery;