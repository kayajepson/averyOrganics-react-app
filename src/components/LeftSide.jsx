import React from 'react';


function LeftSide() {
  var leftPosition = {
    color: 'red',
    // gridColumn: '1/6'

  }

  return (
    <div style={leftPosition}>
      <img width={900} alt="900x500"  src={require('../assets/balm_of_peru.png')}/>
    </div>
  )
}

export default LeftSide;
