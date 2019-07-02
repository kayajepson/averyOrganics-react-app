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
      <header style={rightContentHeader}><h3>{props.day}</h3></header>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  )
}

RightContent.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default RightContent;
