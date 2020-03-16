import React from 'react';

class Video extends React.Component {
    render() {
        const { selectionDetails, selectedSearchResult } = this.props;
        console.log("Video selectionDetails",selectionDetails)
        console.log("Video selectedSearchResult",selectedSearchResult)

        return (
            <div>
                <p>{selectionDetails.Plot}</p>
            </div>
        );
    }
}

export default Video;