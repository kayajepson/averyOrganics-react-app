import React from 'react';
import PropTypes from "prop-types"

function Crop(props) {
  var CropStyle = {
    minHeight: '150px',
    borderRadius: '5px',
    backgroundColor: '#edeff1',
    width: 'inherit',
    paddingLeft: '3px',
    paddingRight: '3px'
  }
  var CropHeader = {
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
     <h3>{props.month}</h3>
     <p><em>{props.selection}</em></p>
     <hr/>
   </div>
 );
  }


// Crop.propTypes = {
//     day: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     hours: PropTypes.string.isRequired,
//     booth: PropTypes.string.isRequired
//   };


export default Crop;
