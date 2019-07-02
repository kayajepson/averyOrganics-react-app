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

      return (
        <div style={myHeaderStyles}>
          <h3 style={titleStyle}>AVERY'S ORGANICS</h3>
        </div>
      )

    }

    export default Header;
