import React from 'react';
import PropTypes from "prop-types"



function Details(props) {
    var DetailsStyle = {
        minHeight: '150px',
        borderRadius: '5px',
        backgroundColor: '#edeff1',
        width: 'inherit',
        paddingLeft: '3px',
        paddingRight: '3px'
    }
    var DetailsHeader = {
        padding: '1px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        backgroundColor: '#ff4500',
        color: 'white',
        fontSize: '10px'
    }

    var buttonStyle = {
        padding: '5px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        backgroundColor: '#ff4500',
        color: 'white',
        fontSize: '10px', 
        width: '100%'
    }

    return (
        <div style={DetailsStyle}>
            <p>A community for learning and developing web applications using React by Facebook.</p>
            <button style={buttonStyle}>JOIN</button>
            <button style={buttonStyle}>CREATE POST</button>
        </div>
    )
}

export default Details;