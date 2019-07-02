import React from 'react';
import PropTypes from "prop-types"



function RightContent(props) {
    var rightContentStyle = {
        minHeight: '150px',
        borderRadius: '5px',
        backgroundColor: '#edeff1',
    }
    var rightContentHeader = {
        padding: '1px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        backgroundColor: '#ff4500',
        color: 'white',
        fontSize: '10px'
    }

    return (
        <div style={rightContentStyle}>
        <header style={rightContentHeader}><h3>{props.title}</h3></header>
            {props.element}
        </div>
    )
}

    RightContent.propTypes = {
        title: PropTypes.string.isRequired,
        element: PropTypes.element.isRequired
    };

export default RightContent;