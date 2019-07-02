import React from 'react';
import PropTypes from "prop-types";

function LeftContent(props) {
  var leftPosition = {
    color: 'red',
    alignContent: 'center'
    // gridColumn: '1/6'

  }

  var leftContentStyle = {
    minHeight: '150px',
    borderRadius: '5px',
    backgroundColor: '#edeff1',
    paddingBottom: "2%",
    marginBottom: "2%"
  }
  var leftContentHeader = {
    padding: '1px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    backgroundColor: '#a08db5',
    color: 'white',
    fontSize: '10px'
  }

  return (
    <div style={leftContentStyle}>
      <header style={leftContentHeader}><h3>{props.month}</h3></header>
      <p>{props.selection}</p>
    </div>
  )
}


LeftContent.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};


export default LeftContent;
