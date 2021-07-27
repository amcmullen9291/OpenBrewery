import { Link, useParams} from 'react-router-dom';

const SelectedBrewery = () => {
    const brewery = useParams();
    return (
        <>
        <Link to={"/CityBreweries"}>Return to the Lobby</Link>
        <hr/>
        <p>"You made it:"</p>
        {brewery.name}
        </>
    )
}

export default SelectedBrewery;