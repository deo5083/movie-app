import React from 'react';
import Video from './InfoAreas/Video'
import Person from './InfoAreas/Person'

class TextArea extends React.Component {
    render() {
        const { selectionDetails, selectedSearchResult } = this.props;

        let renderComponent = selectedSearchResult.type === "person" ?
            <Person
                selectedSearchResult={selectedSearchResult}
            />
            :
            <Video
                selectionDetails={selectionDetails}
                selectedSearchResult={selectedSearchResult}
            />

        return (
            <div>
                {renderComponent}
            </div>
        );
    }
}

export default TextArea;