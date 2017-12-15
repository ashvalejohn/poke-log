import React, { Component } from 'react';

class Days extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokes: {},
      days: []
    }

    this.makeDays = this.makeDays.bind(this);
  }

  makeDays(){
    console.log(this.props);
    let days = {};
    const pokes = this.props.pokes;
    const pokeDays = {};
    const offset = this.props.firstDay;

    for (const poke in pokes) {
      const date = parseInt(pokes[poke].date.slice(-2));
      pokeDays[date] = {
        poke: pokes[poke].double ? "double" : "single",
        bleed: false
      };
    }

    // make nil days
    for (var i = 0; i < offset; i++){
      days[i] = {
        date: null,
      };
    }

    // make days for lengthOfMonth
    for (var i = offset; i < this.props.daysInMonth + offset; i++) {
      const date = i - offset + 1;
      if (pokeDays[date]) {
        days[i] = {
          date: date,
          poke: pokeDays[date].poke,
          bleed: pokeDays[date].bleed,
        }
      } else {
        days[i] = {
          date: date,
        }
      }
    }

    console.log(days);
    return days;
  }

  render(){
    console.log(this.props);
    const days = this.makeDays();
    console.log(days);
    return (
      <div className='days__container'>
        {
          // days.map((day, index) => {
          //   console.log(day);
          //   // <div key={`${index}${day.date}`} className='day'>
          //   //   <p>{day.date}</p>
          //   // </div>
          //   }
          // )
        }
      </div>
    )
  }
}

export default Days;