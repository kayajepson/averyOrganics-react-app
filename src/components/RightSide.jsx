import React from 'react';
import RightContent from './RightContent';
import Detail from './Detail';

function RightSide() {
    var rightPosition = {
        // gridColumn: '7/8',

    }

    const marketSchedule = [
      {
        day: "Sunday",
        location: "Lents International",
        hours: "9:00am - 2:00pm",
        booth: "4A"
      },
      {
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00am - 2:00pm",
        booth: "7C"
      },
      {
        day: "Tuesday",
        location: "Hillsboro",
        hours: "5:00pm - 8:30pm",
        booth: "1F"
      },
      {
        day: "Wednesday",
        location: "Shemanski Park",
        hours: "10:00am - 2:00pm",
        booth: "3E"
      },
      {
        day: "Thursday",
        location: "Northwest Portland",
        hours: "2:00pm - 6:00pm",
        booth: "6D"
      },
      {
        day: "Saturday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
      }
    ];

    return (
        <div style={rightPosition}>
          {marketSchedule.map((weekday, index) =>
        <RightContent
          day={weekday.day}
          location={weekday.location}
          hours={weekday.hours}
          booth={weekday.booth} 
          key={index}/>
      )}
        </div>
    )
}

export default RightSide;
