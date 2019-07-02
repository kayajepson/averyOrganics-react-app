import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
// import Grid from 'react-css-grid'

function MainContainer() {
    var myMainContainerStyles = {
        display: 'grid',
        gridTemplateColumns: '6fr 2fr',
        gridTemplateArea: 'left right',
        backgroundColor: '#dadada',
        paddingRight: '5%',
        paddingLeft: '2%',
        paddingTop: '2%',
        height: '100vh',
      }

    //   .container {
    //     display: grid;

    //     grid-template-columns: 1fr 1fr 1fr 1fr;
    //     grid-template-rows: 100px 200px 100px;

    //     grid-template-areas:
    //           "head head2 . side"
    //           "main main2 . side"
    //           "footer footer footer footer";
    //   }


    return (
      <div style={myMainContainerStyles}>
        <LeftSide className='left'/>
        <RightSide className='right'/>
      </div>
    )
}

export default MainContainer;
