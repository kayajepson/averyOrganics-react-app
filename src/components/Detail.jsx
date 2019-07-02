import React from 'react';
import PropTypes from "prop-types"

function Detail(props) {
  var DetailStyle = {
    minHeight: '150px',
    borderRadius: '5px',
    backgroundColor: '#edeff1',
    width: 'inherit',
    paddingLeft: '3px',
    paddingRight: '3px'
  }
  var DetailHeader = {
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
   <div>
       <style jsx>{`
         div {
           background-color: red;
         }
       `}</style>
     <h3>{props.day} - {props.location}</h3>
     <p><em>{props.hours}-{props.booth}</em></p>
     <hr/>
   </div>
 );
  }


// Detail.propTypes = {
//     day: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     hours: PropTypes.string.isRequired,
//     booth: PropTypes.string.isRequired
//   };


export default Detail;
