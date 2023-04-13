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
                {flights.map((flights, i) => {
                    return(
                        <li key={flights._id}>
                            The <a href={`/flights/${flights._id}`}>{flights.airline}</a>
                            {' '}flight number: {flight.flightNo}{'. '}
                            {}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}