const React = require('react');

function Index(props){
    const {flights} = props;
    console.log(flights);
    return(
        <div>
            <nav>
                <a href='/flights/new'> Book a new Flight!</a>
            </nav>
            <h1>Flight Page Index</h1>
            <ul>
                {flights.map((flight, i) => {
                    return(
                        <li key={flight._id}>
                            The <a href={`/flights/${flight._id}`}>{flight.airline}</a>
                            {' '}flight number: {flight.flightNo}{'. '}
                            {new Date(flight.departs).toLocaleDateString()}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

module.exports = Index;