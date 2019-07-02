import React from 'react';
import RightContent from './RightContent';
import Details from './Details';

function RightSide() {
    var rightPosition = {
        // gridColumn: '7/8',

    }

    return (
        <div style={rightPosition}>
            <RightContent
            title = "COMMUNITY DETAILS"
            element = <Details/> /> 
            <br/>
            <RightContent
            title = "R/REACTJS RULES"/>
            <br/>
            <RightContent
            title = "SIDEBAR"/>
            <br/>
            <RightContent
            title = "MODERATORS"/>
            <br/>
        </div>
    )
}

export default RightSide;