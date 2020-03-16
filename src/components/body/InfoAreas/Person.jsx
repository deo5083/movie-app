import React from 'react';

class Person extends React.Component {
    render() {
        const { selectedSearchResult } = this.props;
        console.log("Person", selectedSearchResult)

        return (
            <div></div>
        );
    }
}

export default Person;