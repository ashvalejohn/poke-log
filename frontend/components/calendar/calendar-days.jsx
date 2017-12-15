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
    let days = {};
    const pokes = this.props.pokes;
    const pokeDays = {};
    const offset = this.props.firstDay;

    for (const poke in pokes) {
      const date = parseInt(pokes[poke].date.slice(-2));
      pokeDays[date] = {
        poke: pokes[poke].double ? "double" : "single",
        bleed: pokes[poke].bleed
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
    return days;
  }

  render(){
    const makeDays = this.makeDays();
    const days = Object.values(makeDays);
    console.log(days);
    return (
      <div className='days__container'>
        {
          days.map((day, index) => (
            <div key={`${index}${day.date}`} className='day'>
              <p>{day.date}</p>
              <p>{day.bleed ? "🔺" : null}</p>
              <p>{day.poke ? (day.poke === 'single' ? '🔵' : '🔵🔵') : null}</p>
            </div>
            )
          )
        }
      </div>
    )
  }
}

export default Days;