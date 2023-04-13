const React = require('react');

function New(){
    return(
        <div>
            <h1>New Page</h1>
            <form action='/flights' method='POST'>
                Airline:<input type='text' name='airline'/>
                <br />
                Flight Number:<input type='text' name='Flight Number'/>
                <br />
                {/* Departs:<input type='text' name='Departs'/> */}
                <br />
                <input type='submit' value='Book flight?' />
            </form>
        </div>
    );
};

module.exports = New;