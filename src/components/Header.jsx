import React from 'react';


function Header() {
  var myHeaderStyles = {
    display: 'grid',
    backgroundColor: '#ffffff',
    paddingRight: '5%',
    paddingLeft: '2%',
    paddingTop: '2%',
    height: '10vh',
  }

  var titleStyle = {
    color: 'black',
    fontSize: '55px',
    paddingBottom: '10px',
    fontFamily: 'serif'
  }
  var imageStyle = {
    position: "relative",
    // zIndex: "-10",
    marginTop: "-325px",
    marginBottom: '-550px',
    opacity: ".5"
  }

  return (
    <div>
      <div style={imageStyle}>
        <img width={900} alt="flower" src={require('../assets/balm_of_peru.png')}/>
      </div>
      <div style={myHeaderStyles}>
        <h3 style={titleStyle}>AVERY'S ORGANICS</h3>
      </div>
    </div>
  )

}

export default Header;
