import React, {Fragment} from 'react';

class Title extends React.Component {

    generateTitleSubtitleItem(value, showTrailSeparator){
        if(showTrailSeparator){
           return <span>&nbsp; {value} &nbsp; &middot;</span> 
        }
        return <span>&nbsp; {value} &nbsp;</span>
    }

    generateRatingHtml(){

    }

    render() {
        const { selectedSearchResult, selectionDetails } = this.props;
        const isPerson = selectedSearchResult.type === "person" ? true : false;
        console.log("isPerson", isPerson)
        return (
            <div>
                <h3>
                    {selectedSearchResult.label}
                </h3>
                {
                    !isPerson &&
                    <Fragment>
                        {this.generateTitleSubtitleItem(selectionDetails.Year, true)}
                        {this.generateTitleSubtitleItem(selectionDetails.Rated, true)}
                        {this.generateTitleSubtitleItem(selectionDetails.Genre, true)}
                        {this.generateTitleSubtitleItem(selectionDetails.Runtime, false)}
                    </Fragment>
                }

                <small></small>

                <hr />
            </div>
        );
    }
}

export default Title;



